import React, { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./Admindash.css";
export default function Admindash() {
  const nav = useNavigate();

  useEffect(() => {
    const isLoggedIn = Cookies.get("Admin");
    if (!isLoggedIn) {
      return nav("/");
    }
  }, []);
  const handleLogout = async () => {
    Cookies.remove("Admin");
    window.alert("Log Out");
  };
  return (
    <>
      <button
        data-drawer-target="separator-sidebar"
        data-drawer-toggle="separator-sidebar"
        aria-controls="separator-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
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
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 text-white dark:bg-gray-800">
          <ul>
            <li>
              <NavLink
                to=""
                className="flex items-center px-3 text-white py-2 dark:text-white dark:hover:text-gray-800   rounded-lg dark:hover:bg-cyan-400 overflow-hidden"
              >
                <i className="fa-solid fa-house dark:hover:text-slate-800"></i>
                <span className="ml-2">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Admindash/Adduser"
                className="flex items-center px-3 text-white py-2 dark:text-white dark:hover:text-gray-800  rounded-lg dark:hover:bg-cyan-400 overflow-hidden"
              >
                <i className="fa-solid fa-user-plus dark:hover:text-slate-800"></i>
                <span className=" ml-2 ">Add User</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Admindash/Addclub"
                className="flex items-center px-3 text-white py-2 dark:text-white dark:hover:text-gray-800  rounded-lg dark:hover:bg-cyan-400 overflow-hidden"
              >
                <i className="fa-solid fa-square-plus dark:hover:text-slate-800"></i>
                <span className=" ml-3 ">Add Club</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Admindash/Addevent"
                className="flex items-center px-3 text-white py-2 dark:text-white dark:hover:text-gray-800  rounded-lg dark:hover:bg-cyan-400 overflow-hidden"
              >
                <i className="fa-solid fa-calendar-plus dark:hover:text-slate-800"></i>
                <span className=" ml-3 ">Add Event</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Admindash/Postcertificates"
                className="flex items-center px-3 text-white py-2 dark:text-white dark:hover:text-gray-800  rounded-lg dark:hover:bg-cyan-400 overflow-hidden"
              >
                <i className="fa-solid fa-certificate dark:hover:text-slate-800"></i>
                <span className=" ml-3 ">Post Certificate's</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Admindash/StudentReport"
                className="flex items-center px-3 text-white py-2 dark:text-white dark:hover:text-gray-800  rounded-lg dark:hover:bg-cyan-400 overflow-hidden"
              >
                <i class="fa-solid fa-chart-simple dark:hover:text-slate-800"></i>
                <span className=" ml-3 ">StudentReport</span>
              </NavLink>
            </li>
            <li className="dropdown dropdown-hover">
              <label
                tabIndex={0}
                className="flex items-center px-3 text-white py-2 dark:text-white dark:hover:text-gray-800  rounded-lg dark:hover:bg-cyan-400 overflow-hidden"
              >
                <i class="fa-solid fa-calendar-check dark:hover:text-slate-800"></i>
                <span className=" ml-3 ">Event Report's</span>
                <i class="fa-solid fa-chevron-down ml-1 dark:hover:text-slate-800"></i>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <NavLink
                    to="/Admindash/Eventreport"
                    className="flex items-center px-3 text-white py-2 dark:text-white dark:hover:text-gray-800  rounded-lg dark:hover:bg-cyan-400 overflow-hidden"
                  >
                    <i class="fa-solid fa-calendar-check dark:hover:text-slate-800"></i>
                    <span className=" ml-3 ">Event Report</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Admindash/RegisterEventreport"
                    className="flex items-center px-3 mt-2 text-white py-2 dark:text-white dark:hover:text-gray-800  rounded-lg dark:hover:bg-cyan-400 overflow-hidden"
                  >
                    <i class="fa-solid fa-calendar-check dark:hover:text-slate-800"></i>
                    <span className=" ml-3 ">Register Event Report</span>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink
                to="/Admindash/ClubReport"
                className="flex items-center px-3 text-white py-2 dark:text-white dark:hover:text-gray-800  rounded-lg dark:hover:bg-cyan-400 overflow-hidden"
              >
                <i class="fa-solid fa-cubes-stacked dark:hover:text-slate-800"></i>
                <span className=" ml-3 ">Club Report</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Admindash/AdminContactusreport"
                className="flex items-center px-3 text-white py-2 dark:text-white dark:hover:text-gray-800  rounded-lg dark:hover:bg-cyan-400 overflow-hidden"
              >
                <i class="fa-solid fa-address-book  dark:hover:text-slate-800"></i>
                <span className=" ml-3 ">Contact Us Report</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/"
                onClick={handleLogout}
                className="flex items-center px-3 text-white py-2 dark:text-white dark:hover:text-gray-800 hover:bg-green-400 rounded-lg dark:hover:bg-cyan-400 overflow-hidden"
              >
                <i className="fa-solid fa-right-from-bracket dark:hover:text-slate-800"></i>
                <span className="flex-1 ml-3 ">Sign Up</span>
              </NavLink>
            </li>
            <li className="mt-5">
              {" "}
              <span class="animate-pulse inline-block px-3 text-blue-100 rounded-lg">
                You loged using , {Cookies.get("Adminemail")}
              </span>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <Outlet />
        </div>
      </div>
    </>
  );
}
