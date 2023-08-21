import { useEffect, useState } from "react";
import PathName from "./components/Routes";
import Navbar from "./components/navbar";
import Alert from "./components/alert";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function App() {
  const [user, setUser] = useState("");
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate("/");
  const handleUser = () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axios.get("https://absensi.test/api/user").then((response) => {
      setUser(response.data);
    });
  };
  const LogoutHandler = () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axios.post("https://absensi.test/api/logout").then(() => {
      sessionStorage.removeItem("token");
      navigate("/login");
    });
  };
  useEffect(() => {
    handleUser();
  }, []);
  return (
    <>
      <Navbar user={user} LogoutHandler={LogoutHandler} />
      <div className="fixed left-64 top-20 right-10">
        <div className="fixed right-[28%] ">
          <Alert />
        </div>
        <PathName user={user} setUser={setUser} token={token} />
      </div>
    </>
  );
}

export default App;
