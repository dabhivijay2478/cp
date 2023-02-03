import React from "react";

export default function Adminpostcertificate() {
  return (
    <>
      <div className="max-w-screen-xl mt-10 mb-10 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
        <div class="flex justify-center">
          <div class="mb-3 xl:w-96">
            <label
              for="exampleFormControlInput1"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Enter The Event Name
            </label>
            <input
              type="text"
              class="
    form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
  "
              id="Event"
              placeholder="Enter The Event Name"
            />
          </div>
        </div>

        <div class="flex justify-center">
          <div class="mb-3 xl:w-96">
            <label
              for="exampleFormControlInput1"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Enter The Club Name
            </label>
            <input
              type="email"
              class="
    form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
  "
              id="Club"
              placeholder=" Enter The Club"
            />
          </div>
        </div>

        <div class="flex justify-center">
          <div class="mb-3 xl:w-96">
            <label
              for="exampleFormControlInput1"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Enter The Faculty Coordinator
            </label>
            <input
              type="email"
              class="
  form-control
  block
  w-full
  px-3
  py-1.5
  text-base
  font-normal
  text-gray-700
  bg-white bg-clip-padding
  border border-solid border-gray-300
  rounded
  transition
  ease-in-out
  m-0
  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
"
              id="Facultycoordinator"
              placeholder="Enter The Faculty Coordinator"
            />
          </div>
        </div>

        <div class="flex justify-center">
          <div class="mb-3 xl:w-96">
            <label
              for="exampleFormControlInput1"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Enter The Student Coordinator
            </label>
            <input
              type="text"
              class="
  form-control
  block
  w-full
  px-3
  py-1.5
  text-base
  font-normal
  text-gray-700
  bg-white bg-clip-padding
  border border-solid border-gray-300
  rounded
  transition
  ease-in-out
  m-0
  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
"
              id="StudentCoordinator"
              placeholder="Enter The Student Coordinator"
            />
          </div>
        </div>
        <div class="flex justify-center">
          <div class="mb-3 xl:w-96">
            <label
              for="exampleFormControlInput1"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Enter The Certificate's
            </label>
            <input
              type="file"
              class="
form-control
block
w-full
px-3
py-1.5
text-base
font-normal
text-gray-700
bg-white bg-clip-padding
border border-solid border-gray-300
rounded
transition
ease-in-out
m-0
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
"
              id="Certificate"
              placeholder="Enter The Certificate's"
            />
          </div>
        </div>

        <div class="flex justify-center">
          <div class="mb-3 xl:w-96">
            <label
              for="exampleFormControlInput1"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Enter The Start Date
            </label>
            <input
              type="date"
              class="
form-control
block
w-full
px-3
py-1.5
text-base
font-normal
text-gray-700
bg-white bg-clip-padding
border border-solid border-gray-300
rounded
transition
ease-in-out
m-0
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
"
              id="Startdate"
              placeholder=" Enter The Start Date"
            />
          </div>
        </div>
     
        <div class="flex justify-center">
          <div class="mb-3 xl:w-96">
            <a
              href="#_"
              class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-indigo-500 rounded-full shadow-md group"
            >
              <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-green-500 group-hover:translate-x-0 ease">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span class="absolute flex items-center justify-center w-full h-full text-teal-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                Post Certificate
              </span>
              <span class="relative invisible">Post Certificate</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
