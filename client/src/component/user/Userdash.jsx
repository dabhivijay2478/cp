import React, { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import userimage from "../assets/man.png";
export default function Userdash() {
  const nav = useNavigate();

  useEffect(() => {
    const isLoggedIn = Cookies.get("Student");
    if (!isLoggedIn) {
      return nav("/");
    }

    const useremail = Cookies.get("Studentemail");
    console.log(useremail);
  }, []);
  const handleLogout = async () => {
    Cookies.remove("Student");
    nav("/");
    window.alert("Log Out");
  };
  return (
    <>
      <div className="navbar bg-base-100 fixed">
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
                <NavLink to="/User/Certificate" className="px-2 py-3">
                  Certificate's
                </NavLink>
              </li>

              <li>
                <NavLink to="/User/Contactus" className="px-2 py-3">
                  Contact Us
                </NavLink>
              </li>

              <li>
                <NavLink to="/User/Userprofile" className="px-2 py-3">
                  Profile
                </NavLink>
              </li>
              <li>
                <span class="animate-pulse inline-block px-3 text-blue-100 rounded-lg sm:hidden lg:hidden md:block">
                  You login in using, {Cookies.get("Studentemail")}
                </span>
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
              <NavLink to="/User/Certificate" className="px-2 py-3">
                Certificate's
              </NavLink>
            </li>

            <li>
              <NavLink to="/User/Contactus" className="px-2 py-3">
                Contact Us
              </NavLink>
            </li>

            <li>
              <NavLink to="/User/Userprofile" className="px-2 py-3">
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <span class="animate-pulse inline-block px-3 text-blue-100 rounded-lg hidden md:block">
            You logged in using, {Cookies.get("Studentemail")}
          </span>

          <button
            className="btn dark:hover:text-red-500"
            onClick={handleLogout}
          >
            <i class="fa-solid fa-right-from-bracket px-2 py-1 "></i>
            Log Out
          </button>
        </div>
      </div>
      <div className="px-5 py-4  ">
        <Outlet />
      </div>
      <footer className="footer footer-center p-4  mb-0 bottom-0 text-base-content">
        <div className="relative bottom-0 left-0 w-full px-2 py-2  flex justify-center">
          <h1 className="text-center underline text-blue-500">
            {" "}
            <NavLink to="/User/PrivacyPolicy" className="px-2 py-3">
              Privacy Policy
            </NavLink>
          </h1>
        </div>
      </footer>
    </>
  );
}
