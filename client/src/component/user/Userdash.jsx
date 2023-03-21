import React, { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import userimage from "../assets/man.png";
export default function Userdash() {
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
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className=" menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="" className="px-2 py-3">
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/User/pdf" className="px-2 py-3">
                  Certificate's
                </NavLink>
              </li>
              <li>
                <NavLink to="/User/Contactus" className="px-2 py-3">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="" className=" normal-case text-xl">
            <img src={userimage} height={50} width={50} />
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal px-1">
            <li>
              <NavLink to="" className="px-2 py-3">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/User/pdf" className="px-2 py-3">
              Certificate's 
              </NavLink>
            </li>
            <li>
              <NavLink to="/User/Contactus" className="px-2 py-3">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button
            className="btn dark:hover:text-red-500"
            onClick={handleLogout}
          >
            <i class="fa-solid fa-right-from-bracket px-2 py-1 "></i>
            Log Out
          </button>
        </div>
      </div>
      <div className="p-4  ">
        <Outlet />
      </div>
    </>
  );
}
