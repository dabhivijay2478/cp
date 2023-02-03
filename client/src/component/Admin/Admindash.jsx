import React, { useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
import menu from "./menu.png";
import adduser from "./assets/new.png";
import addclub from "./assets/add-event.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
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
  }, [notify()]);
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

                <button
                  class="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContentY"
                  aria-controls="navbarSupportedContentY"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    class="w-5"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                    ></path>
                  </svg>
                </button>
              </div>
              <div
                class="navbar-collapse collapse grow items-center"
                id="navbarSupportedContentY"
              >
                <ul class="navbar-nav mr-auto lg:flex lg:flex-row">
                  <li class="nav-item">
                    <a
                      class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                      href="#!"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                      href="#!"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Features
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                      href="#!"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Pricing
                    </a>
                  </li>
                  <li class="nav-item mb-2 lg:mb-0">
                    <a
                      class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                      href="#!"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      About
                    </a>
                  </li>
                </ul>
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
                <ul class="w-full rounded-lg mt-2 mb-3 text-blue-800">
                  <li class="mb-1">
                    <NavLink
                      to="/Admindash/Adminhome"
                      class="w-fill flex p-3 pl-3 bg-gray-100 hover:bg-gray-200 rounded-lg"
                    >
                      <img class="flex-none w-6 h-full" src={adduser} />
                      <span
                        class="ml-2 truncate"
                        title="Test with a very really long name (resize the browser to see it truncate)"
                      >
                        adduser
                      </span>
                    </NavLink>
                  </li>
                  <li class="mb-1">
                    <NavLink
                      to="/Admindash/Addclub"
                      class="w-fill flex p-3 bg-gray-100 hover:bg-gray-200 rounded-lg"
                    >
                      <img class="flex-none w-6 h-full" src={adduser} />
                      <span class="ml-2 truncate">addclub</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Admindash/Adminhome"
                      class="w-fill flex p-3 bg-gray-100 hover:bg-gray-200 rounded-lg"
                    >
                      <img class="flex-none w-6 h-full" src={adduser} />
                      <span class="ml-2 truncate">report</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Admindash/Adminhome"
                      class="w-fill flex p-3 bg-gray-100 hover:bg-gray-200 rounded-lg"
                    >
                      <img class="flex-none w-6 h-full" src={adduser} />
                      <span class="ml-2 truncate">report</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Admindash/Adminhome"
                      class="w-fill flex p-3 bg-gray-100 hover:bg-gray-200 rounded-lg"
                    >
                      <img class="flex-none w-6 h-full" src={adduser} />
                      <span class="ml-2 truncate">report</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Admindash/Adminhome"
                      class="w-fill flex p-3 bg-gray-100 hover:bg-gray-200 rounded-lg"
                    >
                      <img class="flex-none w-6 h-full" src={adduser} />
                      <span class="ml-2 truncate">report</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Admindash/Adminhome"
                      class="w-fill flex p-3 bg-gray-100 hover:bg-gray-200 rounded-lg"
                    >
                      <img class="flex-none w-6 h-full" src={adduser} />
                      <span class="ml-2 truncate">report</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-screen-xl mt-10 mb-10 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg ">
        <Outlet />
        <ToastContainer />
      </div>
    </>
  );
}
