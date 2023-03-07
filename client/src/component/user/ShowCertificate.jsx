import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import pdfjs from "pdfjs-dist";
export default function ShowCertificate() {
  const [en, seten] = useState("");
  const [pdf, setPdf] = useState(null);
  const handlerest = () => {
    seten("");
  };

  const fetchPDF = async () => {
    try {
      const response = await fetch(`/api/pdf/${en}`);
      const arrayBuffer = await response.arrayBuffer();
      const pdfData = new Uint8Array(arrayBuffer);
      const pdf = await pdfjs.getDocument({ data: pdfData }).promise;
      setPdf(pdf);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <div className="flex justify-center container">
        <div className="card w-full  bg-white border-double  container  shadow-lg ">
          <div className="flex px-2 py-3 justify-center">
            <input
              type="text"
              value={en}
              onChange={(e) => seten(e.target.value)}
              placeholder="Enter Certificate Name"
              className="input input-bordered  input-accent w-full max-w-xs mt-2 px-3 py-2 bg-white text-gray-900"
            />
            <div className="px-2 py-2">
              <button
                onClick={handlerest}
                class="px-5 py-2.5 relative rounded group  text-white font-medium inline-block"
              >
                <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                <span class="relative">Reset</span>
              </button>
              <button
                onClick={fetchPDF}
                class="px-5 ml-5 py-2.5 relative rounded group  text-white font-medium inline-block"
              >
                <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                <span class="relative">Search</span>
              </button>
            </div>
          </div>
        </div>

        <div>
          {Array.from( (_, index) => (
            <div key={index}>
              <canvas id={`page-${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
