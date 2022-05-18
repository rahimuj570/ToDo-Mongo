import React from "react";
import { FaRegTrashAlt, FaClipboardCheck } from "react-icons/fa";

const Todo = () => {
  return (
    <>
      <form
        className="mt-10"
        onSubmit={(e) => {
          e.preventDefault();
          const data = { name: e.target.name.value, task: e.target.task.value };
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
      <table className=" mt-10 w-5/6 mx-auto smax:w-full text-sm text-left text-gray-500 dark:text-gray-400">
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
          <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
            <td className="px-6 py-4">{"supplier"}</td>
            <td className="px-6 py-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              itaque aut qui et aliquid non odio enim nostrum quibusdam omnis?
            </td>
            <td className="px-6 py-4 text-right">
              <div>
                <FaClipboardCheck className="text-sky-600 cursor-pointer hover:text-sky-500 text-2xl" />
              </div>
            </td>
            <td className="px-6 py-4 text-right">
              <div>
                <FaRegTrashAlt className="text-red-600 cursor-pointer hover:text-red-500 text-2xl" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Todo;
