import React from "react";

const Login = () => {
  return (
      <div className="flex flex-col items-center justify-center bg-white bg-opacity-45 h-64  w-72 rounded-3xl gap-2">
          <p className="text-lg" >Login</p>
      <input className="w-52 h-8 text-center rounded-full text-white bg-black" type="text" placeholder="Email ID" />
      <input className="w-52 h-8 text-center rounded-full text-white bg-black" type="password" placeholder="Password" />
          <button className="w-28 h-8 text-center rounded-full text-white bg-slate-800">Login</button>
          <div className=" flex flex-col justify-center items-center">
          <p className="text-sm" >or</p>
          <a href="/signUp" className="text-sky-700">Sign Up</a>
          </div>
         
    
      </div>
  );
};

export default Login;
