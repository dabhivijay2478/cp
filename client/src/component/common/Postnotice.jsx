import React from "react";

export default function Postnotice() {
  return (
    <>
      <div className="max-w-screen-xl mt-10 mb-10 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
        <div class="flex justify-center ">
          <div class="mb-3 xl:w-96">
            <label
              for="exampleFormControlInput1"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Enter Notice
            </label>
            <textarea
              type="text"
              cols={10}
              rows={2}
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
              id="Postnotice"
              placeholder="Enter Notice"
            />
          </div>
        </div>
        <br/>
        <div class="flex justify-center">
          <div class="mb-3 xl:w-96">
            <a
              href="#_"
              class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-teal-500 rounded-full shadow-md group"
            >
              <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-emerald-600 group-hover:translate-x-0 ease">
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
              <span class="absolute flex items-center justify-center w-full h-full text-yellow-500 transition-all duration-300 transform group-hover:translate-x-full ease">
               Post Notice
              </span>
              <span class="relative invisible">Post Notice</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
