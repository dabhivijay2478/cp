import React from "react";

export default function Addclub() {
  return (
    <>
      <div className="flex justify-center container">
        <div className="card w-full bg-slate-100 border-double  container  shadow-lg ">
          <div className="flex px-2 py-3 justify-center">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered  input-primary w-full max-w-xs"
            />
          </div>
          <div className="flex px-2 py-3 justify-center">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered  input-primary w-full max-w-xs"
            />
          </div>
          <div className="flex px-2 py-3 justify-center">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered  input-primary w-full max-w-xs"
            />
          </div>
          <div className="flex px-2 py-3 justify-center">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered  input-primary w-full max-w-xs"
            />
          </div>
        </div>
      </div>
    </>
  );
}
