import React, { useState, useEffect } from "react";
import axios from "axios";

import { Viewer } from "@react-pdf-viewer/core";

import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import { Worker } from "@react-pdf-viewer/core";

const PDFViewer = ({ pdfUrl }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden m-4">
      <div className="p-4">
        <h3 className="font-medium text-lg mb-2">PDF Document</h3>
        <p className="text-gray-600 text-sm">
          {(pdfUrl.length / 1024).toFixed(2)} KB
        </p>
      </div>
      <div className="p-4">
      {pdfUrl && (
        <>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
            <Viewer
              fileUrl={pdfUrl}
              // plugins={[defaultLayoutPluginInstance]}
              scale="page-width"
            />
          </Worker>
        </>
      )}

      {!pdfUrl && <>No pdf file selected</>}
      </div>
    </div>
  );
};

const PDFList = () => {
  const [pdfs, setPdfs] = useState([]);

  useEffect(() => {
    axios
      .get("/pdfs")
      .then((res) => setPdfs(res.data))
      .catch((err) => console.log(err));
      
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {pdfs.map((pdf) => (
        <PDFViewer key={pdf._id} pdfUrl={`/pdfs/${pdf.filename}`} />
      ))}
    </div>
  );
};

export default PDFList;
