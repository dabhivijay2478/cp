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
import Adminpostevent from "./component/common/Adminpostevent";
import Adminpostcertificate from "./component/common/Adminpostcertificate";
import Postnotice from "./component/common/Postnotice";
import Reportuser from "./component/common/Reportuser";
import Edituser from "./component/common/Edituser";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Register" element={<Register />} />

      
        <Route exact path="/Admindash" element={<Admindash />}>
          <Route exact path="Adminhome" element={<AdminHome />} />
          <Route exact path="Addclub" element={<Addclub />} />
          <Route exact path="Adduser" element={<Adduser />} />
          <Route exact path="Adminpostevent" element={<Adminpostevent />} />
          <Route exact path="Adminpostcertificate" element={<Adminpostcertificate />} />
          <Route exact path="Adminpostnotice" element={<Postnotice />} />
          <Route exact path="Adminedituser" element={<Edituser />} />
          <Route exact path="Adminreportuser" element={<Reportuser />} />
        </Route>


        <Route path="*" element={<Errorpage />} />
      </Routes>
    </>
  );
}

export default App;
