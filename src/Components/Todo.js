import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaRegTrashAlt, FaClipboardCheck } from "react-icons/fa";
import { toast } from "react-toastify";
import auth from "../firebase.int";

const Todo = () => {
  const [tasks, setTasks] = useState();
  const [user] = useAuthState(auth);
  const addTask = (e) => {};
  const [refetch, setReFetch] = useState(false);

  useEffect(() => {
    fetch("https://blooming-anchorage-84923.herokuapp.com/userTask", {
      headers: {
        authorization: user?.uid,
      },
    })
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, [refetch]);

  // ========== DELETE FUNCTION ========
  const deleteAction = (id) => {
    const confirm = prompt(
      `Are you sure to delete this Task? Then type "DELETE" to confirm your action.`
    ).toLocaleUpperCase();
    if (confirm === "DELETE") {
      fetch(`https://blooming-anchorage-84923.herokuapp.com/delete/${id}`, {
        method: "DELETE",
      }).then((res) =>
        res.json().then((data) => {
          const remainingTask = tasks.filter((task) => task._id !== id);
          setTasks(remainingTask);
          toast.success("Deleted!");
        })
      );
    } else {
      toast.error(`Type "DELETE" in Uppercase to Delete This Product`);
      return;
    }
  };

  //   ======== UPDATE FUNCTION ==========
  const UpdateAction = (latestData, id) => {
    const url = `https://blooming-anchorage-84923.herokuapp.com/update/${id}`;
    fetch(url, {
      method: "put",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(latestData),
    }).then((res) =>
      res.json().then((data) => {
        setReFetch(!refetch);
        toast.success("Congratulation!");
      })
    );
  };

  return (
    <>
      <form
        className="mt-10"
        onSubmit={async (e) => {
          e.preventDefault();
          const data = {
            name: e.target.name.value,
            task: e.target.task.value,
            uid: user.uid,
          };
          await fetch("https://blooming-anchorage-84923.herokuapp.com/add", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
            });
          e.target.reset();
          toast.success("Task Added");
          setReFetch(!refetch);
        }}
      >
        <div className="text-center">
          <input
            name="name"
            className="   bg-slate-50 p-2 rounded "
            type="text"
            placeholder="Name"
            required
          />
          <br />
          <textarea
            name="task"
            className="bg-slate-50 p-2 rounded my-2"
            type="text"
            placeholder="Task Details"
            required
          />
          <br />
          <button className="px-2 py-1 my-1 bg-sky-400 rounded text-white">
            Add New Task
          </button>
        </div>
      </form>
      <h2 className="text-xl font-semibold mt-6 text-center text-sky-300">
        You Have {tasks?.length} {tasks?.length > 1 ? "Tasks" : "Tasks"}
      </h2>
      <table className=" mt-5 w-5/6 mx-auto smax:w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Complete
            </th>
            <th scope="col" className="px-6 py-3">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks?.map((task) => (
            <tr
              key={task?._id}
              className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
            >
              <td className="px-6 py-4">{task?.name}</td>
              <td
                className={
                  task?.isComplete ? "line-through px-6 py-4" : "px-6 py-4"
                }
              >
                {task?.task}
              </td>
              <td className="px-6 py-4 text-right">
                <div>
                  <FaClipboardCheck
                    onClick={() => {
                      const completeTask = {
                        name: task?.name,
                        task: task?.task,
                        isComplete: true,
                      };
                      UpdateAction(completeTask, task?._id);
                      console.log(completeTask);
                    }}
                    className="text-sky-600 cursor-pointer hover:text-sky-500 text-2xl"
                  />
                </div>
              </td>
              <td
                onClick={() => deleteAction(task?._id)}
                className="px-6 py-4 text-right"
              >
                <div>
                  <FaRegTrashAlt className="text-red-600 cursor-pointer hover:text-red-500 text-2xl" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Todo;
