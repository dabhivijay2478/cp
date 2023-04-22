import React, { useState } from "react";
import Loginimg from "../assets/login.png";
import "./assets/login.css";
import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Userprofile from "./user/Userprofile";
export default function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const validateInputs = () => {
    let emailErrorMsg = "";
    let passwordErrorMsg = "";
    let isValid = true;

    // Check if email is valid
    if (!email) {
      emailErrorMsg = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      emailErrorMsg = "Invalid email address";
      isValid = false;
    }

    // Check if password is valid
    if (!password) {
      passwordErrorMsg = "Password is required";
      isValid = false;
    } 
    // else if (password.length < 4) {
    //   passwordErrorMsg = "Password must be at least 6 characters";
    //   isValid = false;
    // }

    // Set error messages in state
    setEmailError(emailErrorMsg);
    setPasswordError(passwordErrorMsg);

    return isValid;
  };

  const loginuser = async (e) => {
    e.preventDefault();

    if (validateInputs()) {
      setIsLoading(true);

      const response = await fetch("/loginserver", {
        method: "POST",
        changeOrigin: true,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Email: email,
          Password: password,
        }),
      });

      const data = await response.json();
      console.log(`User role: ${data.Role}`);

      const role = await data.Role;
      console.log(role);

      if (response.status === 400 || !data) {
        window.alert("Invalid email or password");
        setIsLoading(false);
      } else {
        Cookies.set(role, true, { expires: 1 });
        window.alert("Success");

        // Redirect user based on their role
        switch (role) {
          case "Admin":
            history("/Admindash");
            Cookies.set("Adminemail", email);
            break;
          case "ClubAdmin":
            history("/ClubAdmin");
            Cookies.set("ClubAdminemail", email);
            break;
          case "Student":
            history(`/user`);
            Cookies.set("Studentemail", email);
            break;
          default:
            history("*");
        }

        setIsLoading(false);
      }
    }
  };
  return (
    <>
      <section class="bg-white fixed  w-screen h-screen   justify-center items-center z-50">
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
                action="#"
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    required=""
                  />
                  {emailError && (
                    <span className="error text-red-500">{emailError}</span>
                  )}
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                  {passwordError && (
                    <span className="error text-red-500">{passwordError}</span>
                  )}
                </div>

                <button
                  type="submit"
                  class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 hover:bg-green-500 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {isLoading && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-opacity-50 bg-gray-900 flex justify-center items-center z-50">
          <div class="spinner"></div>
        </div>
      )}
    </>
  );
}
