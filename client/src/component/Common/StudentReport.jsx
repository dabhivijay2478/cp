import React from "react";
import { useEffect, useState } from "react";
import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017/cp';

const client = new MongoClient(uri);

export default function StudentReport() {
  const [documents, setDocuments] = useState([]);
  useEffect(() => {
    client.connect((err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Connected to MongoDB");

        const collection = client.db("cp").collection("addusers");

        const cursor = collection.find();

        cursor.toArray((err, documents) => {
          if (err) {
            console.log(err);
          } else {
            setDocuments(documents);
          }
        });
      }
    });

    return () => {
      client.close();
    };
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
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </>
  );
}
