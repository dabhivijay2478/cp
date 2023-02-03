import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./component/Register";
import Login from "./component/Login";
import Admindash from "./component/Admin/Admindash";
import Errorpage from "./component/Errorpage";
import Adduser from "./component/common/Adduser";
import Addclub from "./component/Admin/Addclub";
import AdminHome from "./component/Admin/AdminHome";
import Adminpostevent from "./component/common/Adminpostevent";
import Adminpostcertificate from "./component/common/Adminpostcertificate";
import Postnotice from "./component/common/Postnotice";
import Reportuser from "./component/common/Reportuser";
import { ProtectedRoute } from "./Route/protected.route";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Register" element={<Register />} />

        <Route exact path="/Admindash" element={<Admindash />}>
          <ProtectedRoute exact path="Adminhome" element={<AdminHome />} />
          <ProtectedRoute exact path="Addclub" element={<Addclub />} />
          <ProtectedRoute exact path="Adduser" element={<Adduser />} />
          <ProtectedRoute
            exact
            path="Adminpostevent"
            element={<Adminpostevent />}
          />
          <ProtectedRoute
            exact
            path="Adminpostcertificate"
            element={<Adminpostcertificate />}
          />
          <ProtectedRoute
            exact
            path="Adminpostnotice"
            element={<Postnotice />}
          />

          <ProtectedRoute
            exact
            path="Adminreportuser"
            element={<Reportuser />}
          />
        </Route>

        <Route path="*" element={<Errorpage />} />
      </Routes>
    </>
  );
}

export default App;
