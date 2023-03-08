import React, { useState, useEffect } from "react";
import axios from "axios";

import { Viewer } from "@react-pdf-viewer/core";

import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import { Worker } from "@react-pdf-viewer/core";
export default function PdfViewer({}) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const [viewPdf, setViewPdf] = useState(null);

  useEffect(() => {
    const fetchpdf = (e) => {
      const pdfurl = "2022.pdf";
      axios
        .get(`/fileinfo/${pdfurl}`, { responseType: "arraybuffer" })
        .then((res) => {
          const blob = new Blob([res.data], { type: "application/pdf" });
          const url = URL.createObjectURL(blob);
          setViewPdf(url);
        })
        .catch((err) => console.error(err));
    };

    fetchpdf();
  }, []);

  return (
    <>
      <div className="container">
        <br></br>

        <h4>View PDF</h4>
        <div className="pdf-container">
          {/* show pdf conditionally (if we have one)  */}
          {viewPdf && (
            <>
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
                <div
                  className="ml-44 w-full flex justify-center "
                  style={{
                    border: "1px solid rgba(0, 0, 0, 0.3)",
                    height: "750px",
                  }}
                >
                  <Viewer
                    fileUrl={viewPdf}
                    plugins={[defaultLayoutPluginInstance]}
                  />
                </div>
              </Worker>
            </>
          )}

          {/* if we dont have pdf or viewPdf state is null */}
          {!viewPdf && <>No pdf file selected</>}
        </div>
      </div>
    </>
  );
}
