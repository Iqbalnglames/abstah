import { useEffect, useState } from "react";
import user from "../images/user.png";
import axios from "axios";

const UserCard = ({ setCard, hasilScan }) => {
  const date = new Date();
  const tanggal = `${date.getDay()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
  const waktu = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  const [pesan, setPesan] = useState("");
  const [result, setResult] = useState("");

  const showData = () => {
    axios.get(`https://absensi.test/api/kehadiran/${hasilScan}`).then((res) => {
      setResult(res.data.data);
    });
  };

  useEffect(() => {
    showData();
  }, []);

  const handleData = async () => {
    setTimeout(() => {
      const formData = new FormData();
      formData.append("nama_ustadz", result.nama_asatidzah);
      formData.append("tanggal_kehadiran", tanggal);
      formData.append("waktu_kehadiran", waktu);
      axios
        .post(`https://absensi.test/api/kehadiran`, formData)
        .then((response) => {
          setPesan(response.data.message);
          setCard(false);
        }, 200);
    });
  };

  return (
    <div className="slide-bottom fixed text-white rounded-md bg-gradient-to-r from-sky-600 to-cyan-400 h-auto w-auto p-8 ">
      <img src={user} alt="user" className="w-12 mx-[130px]" />
      <h1 className="font-bold text-lg">User Detail</h1>
      <div className="text-start">
        {result === null ? (
          <>
            <h1>Tidak ada data</h1>
            <button
              onClick={() => setCard(false)}
              className="mx-[110px] mt-4  bg-white text-black rounded p-2 w-28">
              Tutup
            </button>
          </>
        ) : (
          <>
            <table>
              <tr>
                <td>Nama Lengkap </td>
                <td>: {result.nama_asatidzah}</td>
              </tr>
              <tr>
                <td>Email </td>
                <td>: {result.email}</td>
              </tr>
              <tr>
                <td>Mata Pelajaran </td>
                <td>: {result.mapel}</td>
              </tr>
            </table>
            <button
              onClick={handleData}
              className="mx-[110px] mt-4  bg-white text-black rounded p-2 w-28">
              Kirim Absen
            </button>
          </>
        )}
      </div>
    </div>
  );
};
export default UserCard;
