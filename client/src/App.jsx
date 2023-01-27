import "./App.css";
import Register from "./component/Register";

import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
