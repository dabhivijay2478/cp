import React, { useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
import menu from "./menu.png";
// import adduser from "./assets/new.png";
// import addclub from "./assets/add-event.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "./admindash.css"

export default function Admindash() {
  const notify = () => toast("Welcome Admin");
  const history = useNavigate();
  const loadData = async () => {
    let response = await fetch("/admindash", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();

    if (response.status === 200) {
      window.alert("Sucesss Login");
      notify();
    } else {
      history("/");
    }
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <div>
        <header>
          <nav class="navbar navbar-expand-lg shadow-lg shadow-blue-200  py-2 rounded-sm  bg-white relative flex items-center w-full justify-between mt-5 border border-gray-700  ">
            <div class="px-6 w-full flex flex-wrap items-center justify-between">
              <div class="flex items-center">
                <a
                  class="inline-block px-6 py-2.5 bg-white text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-white hover:text-gray-900 hover:shadow-lg focus:bg-white focus:shadow-lg  focus:outline-none focus:ring-0 active:bg-white active:shadow-lg transition duration-150 ease-in-out mr-1.5"
                  data-bs-toggle="offcanvas"
                  href="#offcanvasExample"
                  role="button"
                  aria-controls="offcanvasExample"
                >
                  <img src={menu} height={15} width={20} alt="menu" />
                </a>

               <h2 className="ml-5">Admin DashBoard</h2>
              </div>
              
            </div>
          </nav>
        </header>
      </div>
      <div class="flex space-x-2">
        <div>
          <div
            class="offcanvas offcanvas-start fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 left-0 border-none w-80"
            tabindex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div class="offcanvas-header flex items-center justify-between p-4">
              <h5
                class="offcanvas-title mb-0 leading-normal font-semibold"
                id="offcanvasExampleLabel"
              >
                Admin-DashBoard
              </h5>
              <button
                type="button"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-900 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>

                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="offcanvas-body flex-grow p-4 overflow-y-auto">
              <div class="flex justify-center">
                <div className="sd-body">
                  <ul>
                    <li>
                      <NavLink to="/Admindash/Adminhome" className="sd-link bg-white  dark:hover:bg-green-400 dark:hover:text-blue-900 text-gray-700">
                        Home
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to="/Admindash/Adduser" className="sd-link  bg-white dark:hover:bg-green-400 dark:hover:text-blue-900 text-gray-700">
                        Add User
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Admindash/Addclub" className="sd-link  bg-white dark:hover:bg-green-400 dark:hover:text-blue-900 text-gray-700">
                        Add Club
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/Admindash/Adminpostevent"
                        className="sd-link  bg-white dark:hover:bg-green-400 dark:hover:text-blue-900 text-gray-700"
                      >
                        Post Event
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/Admindash/Adminpostcertificate"
                        className="sd-link  bg-white dark:hover:bg-green-400 dark:hover:text-blue-900 text-gray-700"
                      >
                      Post Certificate
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/Admindash/Adminpostnotice"
                        className="sd-link  bg-white dark:hover:bg-green-400 dark:hover:text-blue-900 text-gray-700"
                      >
                       Post Notice
                      </NavLink>
                    </li>
                   
                    <li>
                      <NavLink
                        to="/Admindash/Adminreportuser"
                        className="sd-link  bg-white dark:hover:bg-green-400 dark:hover:text-blue-900 text-gray-700"
                      >
                        User Report
                      </NavLink>
                    </li>

                    <li>
                    <a href="#_" class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                    <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-rose-500 group-hover:h-full"></span>
                    <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Log Out</span>
                    </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class=" ">
        <Outlet />
        <ToastContainer />
      </div>
    </>
  );
}
