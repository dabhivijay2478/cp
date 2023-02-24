import React from "react";

export default function Addevent() {
  return (
    <>
      <div className="flex justify-center container">
        <div className="card w-full  bg-white border-double  container  shadow-lg ">
          <div className="flex px-2 py-3 justify-center">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered  input-accent w-full max-w-xs mt-2 px-3 py-2"
            />
          </div>
          <div className="flex px-2 py-2 justify-center">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered  input-accent w-full max-w-xs mt-2 px-3 py-2"
            />
          </div>
          <div className="flex px-2 py-2 justify-center">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered  input-accent w-full max-w-xs mt-2 px-3 py-2"
            />
          </div>
          <div className="flex px-2 py-2 justify-center">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered  input-accent w-full max-w-xs mt-2 px-3 py-2"
            />
          </div>
        </div>
      </div>
    </>
  );
}
