import React, { useState, useEffect } from "react";
import axios from "axios";

import { Viewer } from "@react-pdf-viewer/core";

import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import { Worker } from "@react-pdf-viewer/core";
export default function ShowCertificate() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [pdfurl, setPdfurl] = useState("");
  const [pdf, setPdf] = useState(null);
  const handlerest = () => {
    setPdfurl("");
    
  };
  const [viewPdf, setViewPdf] = useState(null);

  const fetchpdf = (e) => {
    const pdffile = `${pdfurl}.pdf`;
    axios
      .get(`/fileinfo/${pdffile}`, { responseType: "arraybuffer" })
      .then((res) => {
        const blob = new Blob([res.data], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        setViewPdf(url);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="flex justify-center container">
        <div className="card w-full  bg-white border-double  container  shadow-lg ">
          <div className="flex px-2 py-3 justify-center">
            <input
              type="text"
              value={pdfurl}
              onChange={(e) => setPdfurl(e.target.value)}
              placeholder="Enter Certificate Name"
              className="input input-bordered  input-accent w-full max-w-xs mt-2 px-3 py-2 bg-white text-gray-900"
            />
            <div className="px-2 py-2">
              <button
                onClick={fetchpdf}
                class="px-5 ml-5 py-2.5 relative rounded group  text-white font-medium inline-block"
              >
                <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                <span class="relative">Search</span>
              </button>
              <button
                onClick={handlerest}
                class="px-5 py-2.5 ml-5 relative rounded group  text-white font-medium inline-block"
              >
                <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                <span class="relative">Reset</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col justify-center items-center  ">
        {viewPdf && (
          <>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
              <Viewer
                fileUrl={viewPdf}
                plugins={[defaultLayoutPluginInstance]}
                scale="page-width"
              />
            </Worker>
          </>
        )}

        {!viewPdf && <>No pdf file selected</>}
      </div>
    </>
  );
}
