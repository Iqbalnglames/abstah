import axios from "axios";
import logo from "../images/logo-pprq.png";
import { useEffect, useState } from "react";
import QrResult from "../components/QrResult";

const AddData = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [mapel, setMapel] = useState("");
  const [show, setShow] = useState(false);

  const handleAddData = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nama_asatidzah", nama);
    formData.append("email", email);
    formData.append("mapel", mapel);

    await axios.post("https://absensi.test/api/employer", formData).then(() => {
      setShow(true);
    });
  };

  return (
    <>
      {show ? (
        <QrResult setShow={setShow} />
      ) : (
        <div className="flex justify-center px-20">
          <div className="border-2 border-slate-300 pb-3 rounded-md">
            <div className="p-4 px-40 bg-gradient-to-r from-sky-600 to-cyan-400 text-white">
              <div className="flex justify-center">
                <img src={logo} alt="logo" className="w-20 h-[70px] -mb-3" />
                <div className="">
                  <span className="block -mb-2 text-2xl">Pondok Pesantren</span>
                  <span className="text-3xl">Raudhatul Quran</span>
                </div>
              </div>
              <h1 className="mt-2 text-lg text-center font-bold">
                Tambahkan Data Pegawai
              </h1>
            </div>
            <form onSubmit={handleAddData} className="p-4">
              <p className="font-bold">Perhatian!!!</p>
              <p className="mb-2">
                penambahan data hanya boleh dilakukan oleh superadmin, karena
                sangat bergantung dengan serial number yang akan menjadi
                identitas unik bagi masing masing ustadz
              </p>
              <label htmlFor="nama" className="block">
                Nama :
              </label>
              <input
                type="text"
                className="p-2 w-full border-2 border-gray-300 rounded-md"
                onChange={(e) => setNama(e.target.value)}
                value={nama}
                placeholder="input your name here"
              />
              <label htmlFor="nama" className="block">
                Email :
              </label>
              <input
                type="email"
                className="p-2 w-full border-2 border-gray-300 rounded-md"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="input your email here"
                value={email}
              />
              <label htmlFor="nama" className="block">
                Mata Pelajaran yang diampu :
              </label>
              <input
                type="text"
                className="p-2 w-full border-2 border-gray-300 rounded-md"
                onChange={(e) => setMapel(e.target.value)}
                placeholder="input your lesson here"
                value={mapel}
              />
              <button
                type="submit"
                className="p-2 bg-gradient-to-r from-sky-600 to-cyan-400 rounded-md mt-4 text-white hover:bg-sky-600">
                kirim Data
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
export default AddData;
