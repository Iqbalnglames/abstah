import { useState } from "react";
import logo from "../../images/logo-pprq.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate("/");

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", userName);
    formData.append("password", password);

    axios.post("https://absensi.test/api/login", formData).then((response) => {
      sessionStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    });
  };

  return (
    <div className="flex h-screen left-0 fixed justify-center bg-blur pt-40 w-screen bottom-0 ">
      <div className="slide-bottom flex justify-center fixed rounded-md bg-gradient-to-r from-sky-600 to-cyan-400 h-auto w-[25%] p-8 pt-6">
        <div>
          <div className="flex">
            <img src={logo} alt="logo" className="w-20 inline" />
            <div className="mt-2 text-white">
              <h1 className="text-sm">Pondok Pesantren</h1>
              <h1 className="text-xl">Raudhatul Quran</h1>
            </div>
          </div>
          <h1 className="text-center text-white">Sign in to your account</h1>
          <div className="mt-4">
            <form onSubmit={handleLogin}>
              <label className="block mb-1 text-white">Username</label>
              <input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                className="p-2 border-2 border-purple-600 mb-2 rounded-md focus:border focus:border-gray-200 w-64"
                placeholder="type your username"
              />
              <label className="block mb-1 text-white">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="p-2 border-2 border-purple-600 mb-2 rounded-md focus:border focus:border-gray-200 w-64"
                placeholder="type your password"
              />
              <button
                type="submit"
                className="block p-2 bg-white hover:bg-slate-200 border border-purple-600 rounded-lg">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
