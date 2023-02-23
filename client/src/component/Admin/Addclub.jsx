import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
export default function Addclub() {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });
  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  return (
    <>
      <div className="flex justify-center container">
        <div className="card w-full bg-white border-double  container  shadow-lg ">
          <div className="flex px-2 py-3 justify-center">
            <input
              type="text"
              placeholder="Club Name"
              className="input input-bordered  input-primary w-full bg-white max-w-xs text-black"
            />
          </div>
          <div className="flex px-2 py-3 justify-center">
            <input
              type="text"
              placeholder="Main Handler Factulty"
              className="input input-bordered  input-primary w-full bg-white max-w-xs text-black"
            />
          </div>
          <div className="flex px-2 py-3 justify-center">
            <input
              type="text"
              placeholder="Main Handler Student"
              className="input input-bordered  input-primary w-full bg-white max-w-xs text-black"
            />
          </div>

          <div className="flex px-2 py-3  justify-center  ">
            <div className=" w-full bg-white max-w-xs text-black border rounded-lg border-purple-500">
              <Datepicker
                useRange={false}
                asSingle={true}
                inputClassName="font-normal  dark:bg-white  datepickertext dark:placeholder:input-primary dark:placeholder:text-gray-700"
                displayFormat={"DD-MM-YYYY"}
                primaryColor={"teal"}
                value={value}
                onChange={handleValueChange}
                // showShortcuts={true}
              />
            </div>
          </div>
          <div>
            <button
              class="inline-flex items-center ml-5 mb-2 justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              data-rounded="rounded-md"
              data-primary="blue-600"
              data-primary-reset="{}"
            >
              Reset
            </button>
            <button
              class="inline-flex items-center ml-10 mb-2 justify-end px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              data-rounded="rounded-md"
              data-primary="blue-600"
              data-primary-reset="{}"
            >
              Add Club
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
