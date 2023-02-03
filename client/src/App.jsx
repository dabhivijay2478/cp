import "./App.css";
import Register from "./component/Register";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Admindash from "./component/Admin/Admindash";
import Errorpage from "./component/Errorpage";
import Adduser from "./component/common/Adduser";
import Addclub from "./component/Admin/Addclub";
import Registerdetails from "./component/common/Registerdetails";
import Toast from "./component/Toast";
import AdminHome from "./component/Admin/AdminHome";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Register" element={<Register />} />

      
        <Route exact path="/Admindash" element={<Admindash />}>
          <Route exact path="Adminhome" element={<AdminHome />} />
          <Route exact path="Addclub" element={<Addclub />} />
          <Route exact path="Registerdeatils" element={<Registerdetails />} />
        </Route>


        <Route path="*" element={<Errorpage />} />
      </Routes>
    </>
  );
}

export default App;
