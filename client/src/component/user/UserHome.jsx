import React from "react";
import { useEffect, useState } from "react";
import RegisterForEvent from "./RegisterForEvent";
export default function UserHome() {
  const [lastevent, setlastevent] = useState({});
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/lastevent");
      const result = await response.json();
      setlastevent(result);
    }
    fetchData();
  }, []);
  return (
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="card w-full bg-base-100 shadow-xl border border-double border-emerald-300">
        <div className="card-body">
          <h2 className="card-title">
            New Event :{" "}
            <span className="text-cyan-500">{lastevent.EventName}</span>
          </h2>
          <p>
            {" "}
            ClubName :{" "}
            <span className="text-teal-500">{lastevent.ClubName}</span>
            <br />
            Descrption :{" "}
            <span className="text-teal-500 overflow-hidden">
              {lastevent.Descrption}
            </span>
            <br />
            HandlerName :{" "}
            <span className="text-teal-500">{lastevent.HandlerName}</span>
            <br /> Venue :{" "}
            <span className="text-teal-500">{lastevent.Venue}</span>
            <br /> Certifiacate :{" "}
            <span className="text-teal-500">{lastevent.Certifiacate}</span>
            <br /> Date :{" "}
            <span className="text-teal-500">
              {lastevent && lastevent.Dates && lastevent.Dates.startDate}
            </span>
          </p>
          <div className="card-actions justify-end">
            <label htmlFor="registermodal" className="btn btn-primary">
              Register
            </label>
          </div>
        </div>
      </div>
      {/* Add more cards here */}{" "}
      <RegisterForEvent
        eventName={lastevent.EventName}
        ClubNameprops={lastevent.ClubName}
      />
    </div>
  );
}
