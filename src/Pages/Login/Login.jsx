import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex  justify-center items-center px-32">
      <div className="flex w-[900px] mt-10 justify-center items-center">
        <div className="flex w-1/2 -mr-12 justify-center items-center">
          <img
            src="https://i.ibb.co/1rBnjFw/pigeon-logo.png"
            className="h-[300px] w-1/2"
            alt=""
          />
          <div className="w-1/2">
            <h1 className="text-3xl font-semibold w-full">Pigeon Verse</h1>
            <h6>Explore the ideas throughout the world</h6>
          </div>
        </div>
        <div className="flex w-1/2 justify-center items-center">
          <div>
            <form>
              <h3 className="text-2xl mb-6">LOGIN</h3>

              <div className="">
                <div className="text-sm">
                  <label htmlFor="Useremail">User Email</label>
                </div>
                <input
                  type="text"
                  placeholder="Useremail"
                  className="pl-2 py-1 pr-6 border-2 focus:outline-blue-400 rounded border-gray-400"
                  name="Useremail"
                />
              </div>
              <div className="mt-2 mb-6">
                <div className=" text-sm">
                  <label htmlFor="Userpassword">User Password</label>
                </div>
                <input
                  type="password"
                  placeholder="Userpassword"
                  className="pl-2 py-1 pr-6 border-2 focus:outline-blue-400 rounded border-gray-400"
                  name="Userpassword"
                />
              </div>

              <div>
                <Link>
                  <p className="bg-white border border-blue-400 text-blue-400 font-semibold  py-1 text-center rounded leading-tight hover:text-white hover:bg-blue-400 hover:border-blue-400">
                    LOGIN
                  </p>
                </Link>
              </div>
            </form>
            <p className="pt-4 pb-1 text-xs">Login with social accounts</p>
            <div>
              <button
                aria-label="Log in with Google"
                className="bg-white border border-blue-400 text-blue-400 font-semibold  py-1 w-full text-center rounded leading-tight hover:text-white hover:bg-blue-400 hover:border-blue-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current mx-auto"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
              </button>
              <p className="text-sm mt-3 mb-3">
                Don't have an account?{" "}
                <Link to="/register" className="text-blue-400">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
