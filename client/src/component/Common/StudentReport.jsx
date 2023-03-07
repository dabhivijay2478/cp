import React from "react";
import { useEffect, useState } from "react";

export default function StudentReport() {
  const [mongoData, setMongoData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/data");
      const result = await response.json();
      setMongoData(result);
    }
    fetchData();
  }, []);
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Password</th>
              <th>Email</th>
              <th>PhoneNO</th>
              <th>Class</th>
              <th>Batch</th>
              <th>ClubName</th>
              <th>FavTech</th>
            </tr>
          </thead>
          <tbody>
            {mongoData.map((item, index) => (
              <tr key={index}>
                <td></td>

                <td>{item.Name}</td>
                <td>{item.Password}</td>
                <td>{item.Email}</td>
                <td>{item.PhoneNO}</td>
                <td>{item.Class}</td>
                <td>{item.Batch}</td>
                <td>{item.ClubName}</td>
                <td>{item.FavTech}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
