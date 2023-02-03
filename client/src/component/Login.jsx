import React, { useState } from "react";
import Loginimg from "../assets/login.png";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Login() {
  const history = useNavigate();
  const notify = () => toast("SucessFully Login");
  const [User, setUSer] = useState({
    email: "",
    password: "",
  });

  let name, value;
  const loginInputs = (e) => {
    console.log(e);

    name = e.target.name;
    value = e.target.value;

    setUSer({ ...User, [name]: value });
  };

  const loginuser = async (e) => {
    const { email, password } = User;
    e.preventDefault();
    const response = await fetch("/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    console.log(data);

    if (response.status === 400) {
      window.alert("Bad Request");
    } else if (!response) {
      window.alert("Error");
    } else {
      localStorage.setItem("jwttoken", data.token);
      localStorage.getItem("jwttoken");
      
      window.alert("sucess Login");
      console.log("sucess Login");
      history("/Admindash");
    }
  };

  return (
    <>
      <section class="bg-white ">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <span class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-gray-900">
            <img class="w-20 h-50 mr-2" src={Loginimg} alt="logo" />
            Login
          </span>
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                class="space-y-4 md:space-y-6"
                method="POST"
                onSubmit={loginuser}
              >
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={User.email}
                    onChange={loginInputs}
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={User.password}
                    onChange={loginInputs}
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>

                <button
                  onClick={notify}
                  type="submit"
                  class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 hover:bg-green-500 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <NavLink
                    to="/Register"
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}
