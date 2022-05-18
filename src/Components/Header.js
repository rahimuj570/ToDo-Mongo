import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FcTodoList } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.int";

const Header = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  return (
    <>
      <div className=" my-6 flex justify-center items-center">
        <FcTodoList
          onClick={() => navigate("/")}
          className="cursor-pointer sm:text-6xl text-5xl"
        />
        <p
          onClick={() => navigate("/")}
          className="cursor-pointer text-center sm:text-5xl text-4xl font-bold text-sky-400"
        >
          ToDo Mongo
        </p>
      </div>
      {user && (
        <div className="mt-10 text-center">
          <h2 className="font-bold text-2xl">Welcome {user?.displayName}</h2>
          <button
            className="bg-red-400 text-white rounded px-2 py-1  mt-1"
            onClick={() => signOut(auth)}
          >
            Logout
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
