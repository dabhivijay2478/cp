import Register from "./component/Register";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Admindash from "./component/Admin/Admindash";
import Errorpage from "./component/Errorpage";
import Homepage from "./component/Homepage";
import Adduser from "./component/Common/Adduser";
import Addclub from "./component/Admin/Addclub";
import Addevent from "./component/Common/Addevent";
import Postcertificates from "./component/Common/Postcertificates";
import Adminhome from "./component/Admin/Adminhome";
import StudentReport from "./component/Common/StudentReport";
import Showcertificate from "./component/user/ShowCertificate";

import Userdash from "./component/user/Userdash";
import UserHome from "./component/user/UserHome";
import Clubadmin from "./component/Clubadmin/Clubadmin";
function App() {
  return (
    <>
      <Routes>
        // Login Route
        <Route exact path="/" element={<Login />} />
        // Sign Up Route
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/Login" element={<Login />} />
        // Admindash Routes
        <Route exact path="/Admindash" element={<Admindash />}>
          <Route exact path="" element={<Adminhome />} />
          <Route exact path="Adduser" element={<Adduser />} />
          <Route exact path="Addclub" element={<Addclub />} />
          <Route exact path="Addevent" element={<Addevent />} />
          <Route exact path="Postcertificates" element={<Postcertificates />} />
          <Route exact path="StudentReport" element={<StudentReport />} />
          <Route exact path="*" element={<Errorpage />} />
        </Route>
        // Clubadmin Routes
        <Route exact path="/Clubadmin" element={<Clubadmin />}>
          <Route exact path="" element={<Adminhome />} />
          <Route exact path="Adduser" element={<Adduser />} />
          <Route exact path="Addevent" element={<Addevent />} />
          <Route exact path="Postcertificates" element={<Postcertificates />} />
          <Route exact path="StudentReport" element={<StudentReport />} />
          <Route exact path="*" element={<Errorpage />} />
        </Route>
        // User Routes
        <Route exact path="/User" element={<Userdash />}>
          <Route exact path="" element={<UserHome />} />
          <Route exact path="pdf" element={<Showcertificate />} />
        </Route>
        //Errorpage Route
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </>
  );
}

export default App;
