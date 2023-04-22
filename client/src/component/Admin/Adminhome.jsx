import React from "react";
import { useEffect, useState } from "react";

export default function Adminhome() {
  const [lastregister, setlastregister] = useState({});
  const [lastcontactus, setlastcontactus] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/lastregisterstudent");
      const result = await response.json();
      setlastregister(result);
    }
    async function fetchcontactus() {
      const contactresponse = await fetch("/lastcontactus");
      const contactresult = await contactresponse.json();
      setlastcontactus(contactresult);
    }
    fetchData();
    fetchcontactus();
  }, []);
  return (
    <>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card w-full bg-base-100 shadow-xl border border-double border-emerald-300">
          <div className="card-body">
            <h1 className="text-sky-500 text-lg">Last Register Student</h1>
            <h2 className="card-title">
              Event Name :{" "}
              <span className="text-cyan-500">{lastregister.EventName}</span>
            </h2>
            <p>
              {" "}
              EnrollmentNo :{" "}
              <span className="text-teal-500">{lastregister.EnrollmentNo}</span>
              <br />
              Email :{" "}
              <span className="text-teal-500 overflow-hidden">
                {lastregister.Email}
              </span>
              <br />
              ClubName :{" "}
              <span className="text-teal-500">{lastregister.ClubName}</span>
              <br /> Name :{" "}
              <span className="text-teal-500">{lastregister.Name}</span>
              <br /> FavTech :{" "}
              <span className="text-teal-500">{lastregister.FavTech}</span>
              <br /> PhoneNO :{" "}
              <span className="text-teal-500">{lastregister.PhoneNO}</span>
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl border border-double border-emerald-300">
          <div className="card-body">
            <h1 className="text-sky-500 text-lg">Last Contact Us</h1>
            <h2 className="card-title text-base">
              EnrollmentNo :{" "}
              <span className="text-teal-500">
                {lastcontactus.EnrollmentNo}
              </span>
            </h2>
            <p>
              {" "}
              Name : <span className="text-teal-500">{lastcontactus.Name}</span>
              <br />
              Email :{" "}
              <span className="text-teal-500 overflow-hidden">
                {lastcontactus.Email}
              </span>
              <br />
              ClubName :{" "}
              <span className="text-teal-500">{lastcontactus.ClubName}</span>
              <br /> Subject :{" "}
              <span className="text-teal-500">{lastcontactus.Subject}</span>
              <br /> Message :{" "}
              <span className="text-teal-500">{lastcontactus.Message}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
