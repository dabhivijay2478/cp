import React, { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
export default function Admindash() {
  const nav = useNavigate();

  useEffect(() => {
    const isLoggedIn = Cookies.get("isLoggedIn");
    if (!isLoggedIn) {
      return nav("/");
    }
  }, []);
  const handleLogout = async () => {
    Cookies.remove("isLoggedIn");
    window.alert("Log Out");
  };
  return (
    <>
      <button
        data-drawer-target="separator-sidebar"
        data-drawer-toggle="separator-sidebar"
        aria-controls="separator-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="separator-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul class="space-y-2">
            <li>
              <NavLink
                to=""
                class="flex items-center px-0 text-white mt-5 dark:text-white hover:bg-green-400 rounded-lg"
              >
                <i class="fa-solid fa-house"></i>
                <span class="ml-3">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Admindash/Adduser"
                class="flex items-center px-0 text-white mt-5 dark:text-white hover:bg-green-400 rounded-lg"
              >
                <i class="fa-solid fa-user-plus"></i>
                <span class="flex-1 ml-3 ">Add User</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Admindash/Addclub"
                class="flex items-center px-0 text-white mt-5 dark:text-white hover:bg-green-400 rounded-lg"
              >
                <i class="fa-solid fa-square-plus"></i>
                <span class="flex-1 ml-3 ">Add Club</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Admindash/Addevent"
                class="flex items-center px-0 text-white mt-5 dark:text-white hover:bg-green-400 rounded-lg"
              >
                <i class="fa-solid fa-calendar-plus"></i>
                <span class="flex-1 ml-3 ">Add Event</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Admindash/Postcertificates"
                class="flex items-center px-0 text-white mt-5 dark:text-white hover:bg-green-400 rounded-lg"
              >
                <i class="fa-solid fa-certificate"></i>
                <span class="flex-1 ml-3 ">Post Certificate's</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/"
                onClick={handleLogout}
                class="flex items-center px-0 text-white mt-5 dark:text-white hover:bg-green-400 rounded-lg"
              >
                <i class="fa-solid fa-right-from-bracket"></i>
                <span class="flex-1 ml-3 ">Sign Up</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>

      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <Outlet />
        </div>
      </div>
    </>
  );
}
