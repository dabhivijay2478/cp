import React, { useState, useEffect } from "react";
import axios from "axios";
import { Viewer } from "@react-pdf-viewer/core";

import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import { Worker } from "@react-pdf-viewer/core";
export default function PdfViewer() {
  const [certificate, setCertificate] = useState([]);
  useEffect(() => {
    axios
      .get("/pdfs")
      .then((res) => setCertificate(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {certificate.map((card) => (
        <div class="flex flex-wrap justify-center mt-10">
          <div class="p-4 max-w-sm">
            <div key={card._id}>
              <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{card.filename}</div>
                  <p className="text-gray-700 text-base">
                    <button
                      className="btn dark:hover:text-red-500"
                      // onClick={handleLogout}
                    >
                      <i class="fa-sharp fa-regular fa-file px-2 py-3"></i>
                      <label htmlFor="my-modal-3">open Certificate</label>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </div>
      </div>
    </>
  );
}
