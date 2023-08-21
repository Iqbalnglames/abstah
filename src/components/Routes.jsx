import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Kehadiran from "../pages/Absensi";
import LoginPage from "../pages/Auth/LoginPage";
import ListAbsen from "../pages/ListAbsen";
import AddData from "../pages/AddData";
import QrResult from "./QrResult";
const PathName = ({ user, token }) => {
  if (!token) {
    return (
      <Routes>
        <Route path={"/login"} element={<LoginPage />} />
        <Route
          path={"/*"}
          element={
            <h1>
              Login Terlebih dahulu, klik <Link to={"/login"}>disini</Link>
            </h1>
          }
        />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path={"/dashboard"} element={<Dashboard user={user} />} />
      <Route path={"/absen"} element={<Kehadiran />} />
      <Route path={"/absen-list"} element={<ListAbsen />} />
      <Route path={"/add-data"} element={<AddData />} />
      <Route path={"/qr-result"} element={<QrResult />} />
    </Routes>
  );
};
export default PathName;
