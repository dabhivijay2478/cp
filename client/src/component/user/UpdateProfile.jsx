import React from "react";

export default function UpdateProfile(props) {
  const { Enrollment } = props;
  const {Email} =props
  return (
    <>
      <input type="checkbox" id="my-modal-1" className="modal-toggle " />
      <label htmlFor="my-modal-1" className="modal cursor-">
        <div className="modal-box w-11/12 max-w-5xl">
          <label
            htmlFor="my-modal-1"
            className="btn btn-sm btn-circle absolute right-2 top-2 "
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-teal-500">
            Your Enrollment No : {Enrollment}
          </h3>
          <p className="py-4 text-sky-500">Your Email : {Email} </p>

          <div className="modal-action">
            <label
              htmlFor="my-modal-1"
              className="btn btn-success dark:hover:bg-cyan-500"
            >
              Update Profile
            </label>
          </div>
        </div>
      </label>
    </>
  );
}
