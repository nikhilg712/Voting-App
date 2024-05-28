import React from "react";

const Signup = () => {
  return (
    <div className="flex flex-col items-center bg-opacity-45 justify-center bg-white h-64  w-72 rounded-3xl gap-3">
      <p className="text-lg mt-3">Sign Up</p>
      <input
        className="w-52 h-8 text-center rounded-full text-white bg-black"
        type="text"
        placeholder="Name"
      />
      <input
        className="w-52 h-8 text-center rounded-full text-white bg-black"
        type="email"
        placeholder="Email"
          />
          <input
        className="w-52 h-8 text-center rounded-full text-white bg-black"
        type="password"
        placeholder="Password"
      />
      <button className="w-28 h-8 text-center rounded-full text-white bg-slate-800">
        Sign Up
      </button>
      <div className=" flex flex-col justify-center items-center mb-2">
        <p className="text-sm">or</p>
        <a href="/login" className="text-sky-700">
          Login
        </a>
      </div>
    </div>
  );
};

export default Signup;
