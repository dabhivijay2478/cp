import React from "react";
import Cookies from "js-cookie";
import { useEffect, useState, useRef } from "react";

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
      <div className="card w-full bg-base-100 shadow-xl">
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
            <span className="text-teal-500 overflow-hidden">{lastevent.Descrption}</span>
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
            <button className="btn btn-primary">Register</button>
          </div>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Card title 2</h2>
          <p>
            If two witches would watch two watches, which witch would watch
            which watch?
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Card title 3</h2>
          <p>How can a clam cram in a clean cream can?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      {/* Add more cards here */}{" "}
    </div>
  );
}
