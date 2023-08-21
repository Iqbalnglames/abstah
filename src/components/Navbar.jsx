import { Link } from "react-router-dom";
import logo from "../images/logo-pprq.png";
import { useLocation } from "react-router-dom";

const Navbar = ({ user, LogoutHandler }) => {
  const page = useLocation();
  const path = page.pathname;
  const pill =
    "relative flex group items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 pt-3 pb-5 text-white";
  const unpill =
    "relative flex items-center group space-x-4 px-4 pt-3 pb-5 text-black border-gray-300";

  return (
    <nav className="fixed top-0">
      <div className="bg-gray-300 shadow-lg px-4 h-16 py-2 left-60 right-0 fixed">
        <div className="flex justify-end">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi5sbrRWQN2jLMQJPb1tkl8QgCkD1Gvq7P-Jo8W94&s"
            alt=""
            className="border rounded-full w-10 mt-1 mr-2 self-end"
          />
          <h1 className="py-2">{user.nama}</h1>
        </div>
      </div>
      <div className="fixed z-10">
        <div className="min-h-screen bg-gray-100">
          <div className="sidebar min-h-screen overflow-hidden border-r w-60 shadow-lg">
            <div className="flex h-screen flex-col justify-between pt-2 pb-6">
              <div>
                <div className="w-max p-2.5">
                  <div className="flex">
                    <img src={logo} className="w-14" alt="pprq-logo" />
                    <div className="">
                      <span className="block -mb-2">Pondok Pesantren</span>
                      <span className="text-xl ">Raudhatul Quran</span>
                    </div>
                  </div>
                </div>
                <ul className="mt-4 tracking-wide">
                  <li className="min-w-max">
                    <Link
                      to={"/dashboard"}
                      className={path == "/dashboard" ? pill : unpill}>
                      <h1 className="ml-7 h-6 w-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="h-8 w-8 group-hover:fill-cyan-600"
                          viewBox="0 0 16 16">
                          <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5Z" />
                          <path d="M11.07 9.047a1.5 1.5 0 0 0-1.742.26l-.02.021a1.5 1.5 0 0 0-.261 1.742 1.5 1.5 0 0 0 0 2.86 1.504 1.504 0 0 0-.12 1.07H3.5A1.5 1.5 0 0 1 2 13.5V9.293l6-6 4.724 4.724a1.5 1.5 0 0 0-1.654 1.03Z" />
                          <path d="m13.158 9.608-.043-.148c-.181-.613-1.049-.613-1.23 0l-.043.148a.64.64 0 0 1-.921.382l-.136-.074c-.561-.306-1.175.308-.87.869l.075.136a.64.64 0 0 1-.382.92l-.148.045c-.613.18-.613 1.048 0 1.229l.148.043a.64.64 0 0 1 .382.921l-.074.136c-.306.561.308 1.175.869.87l.136-.075a.64.64 0 0 1 .92.382l.045.149c.18.612 1.048.612 1.229 0l.043-.15a.64.64 0 0 1 .921-.38l.136.074c.561.305 1.175-.309.87-.87l-.075-.136a.64.64 0 0 1 .382-.92l.149-.044c.612-.181.612-1.049 0-1.23l-.15-.043a.64.64 0 0 1-.38-.921l.074-.136c.305-.561-.309-1.175-.87-.87l-.136.075a.64.64 0 0 1-.92-.382ZM12.5 14a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
                        </svg>
                      </h1>
                      <span className="ml-2 font-medium group-hover:text-cyan-600">
                        Dashboard
                      </span>
                    </Link>
                  </li>
                  <li className="min-w-max">
                    <Link
                      to={"/absen"}
                      className={path == "/absen" ? pill : unpill}>
                      <h1 className="ml-7 h-6 w-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="h-8 w-8 group-hover:fill-cyan-600"
                          viewBox="0 0 16 16">
                          <path d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0v-3Zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5ZM.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Zm15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5ZM4 4h1v1H4V4Z" />
                          <path d="M7 2H2v5h5V2ZM3 3h3v3H3V3Zm2 8H4v1h1v-1Z" />
                          <path d="M7 9H2v5h5V9Zm-4 1h3v3H3v-3Zm8-6h1v1h-1V4Z" />
                          <path d="M9 2h5v5H9V2Zm1 1v3h3V3h-3ZM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8H8Zm2 2H9V9h1v1Zm4 2h-1v1h-2v1h3v-2Zm-4 2v-1H8v1h2Z" />
                          <path d="M12 9h2V8h-2v1Z" />
                        </svg>
                      </h1>
                      <span className="ml-2 font-medium group-hover:text-cyan-600">
                        Absensi
                      </span>
                    </Link>
                  </li>
                  <li className="min-w-max">
                    <Link
                      to={"/absen-list"}
                      className={path == "/absen-list" ? pill : unpill}>
                      <h1 className="ml-7 h-6 w-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="h-8 w-8 inline"
                          viewBox="0 0 16 16">
                          <path
                            fillRule="evenodd"
                            d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"
                          />
                          <path d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338v.041zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635V5z" />
                        </svg>
                      </h1>
                      <span className="ml-2 font-medium group-hover:text-cyan-600">
                        List Absensi
                      </span>
                    </Link>
                  </li>
                  <li className="min-w-max">
                    <Link
                      to={"/add-data"}
                      className={path == "/add-data" ? pill : unpill}>
                      <h1 className="ml-7 h-6 w-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="h-8 w-8 inline"
                          viewBox="0 0 16 16">
                          <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
                        </svg>
                      </h1>
                      <span className="ml-2 font-medium group-hover:text-cyan-600">
                        Add Data
                      </span>
                    </Link>
                  </li>
                  <li className="min-w-max">
                    <div
                      to={"/absen"}
                      className="relative flex group items-center space-x-4 border-y-2 border-x-0 border-gray-300 px-4 pt-3 pb-5 text-white">
                      <h1 className="ml-7 h-6 w-1"></h1>
                      <span className="ml-2 font-medium text-gray-400">
                        Coming soon
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="w-max -mb-3">
                <Link
                  onClick={LogoutHandler}
                  className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="h-8 w-8 group-hover:fill-red-600"
                    viewBox="0 0 16 16">
                    <path
                      fillRule="evenodd"
                      d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                    />
                  </svg>
                  <h1 className="group-hover:text-red-600">Logout</h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
