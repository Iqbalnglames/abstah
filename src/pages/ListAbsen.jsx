import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import * as XLSX from 'xlsx'

const ListAbsen = () => {
  const [kehadiran, setKehadiran] = useState([]);

  const fetchData = () => {
    axios.get("https://absensi.test/api/kehadiran").then((response) => {
      setKehadiran(response.data.data);
    });
  };
  console.log(kehadiran);

  useEffect(() => {
    fetchData();
  }, []);

  const handleDownloadXlsx = () => {
    const table = document.getElementById('table-data')
    const workbook = XLSX.utils.table_to_book(table)
    const ws = workbook.Sheets["Sheet 1"]
    XLSX.utils.sheet_add_aoa(ws, [["Created "+new Date().toISOString()]], {origin: -1})
    XLSX.writeFile(workbook, "Laporan Absen.xlsx")
  } 

  return (
    <div className="flex justify-center">
      <div>
        <h1 className="text-center font-bold text-2xl mb-4">List Absensi</h1>
        <div>
          <Link onClick={handleDownloadXlsx}>Download Tabel</Link>
        </div>
        <table className="border-2 border-spacing-1" id="table-data">
          <tr className="text-left bg-slate-300 border-2 border-spacing-1">
            <th className="w-72 pl-2 py-3 border-2 border-spacing-1">
              Nama Ustadz
            </th>
            <th className="pr-4 pl-2 border-2 border-spacing-1">
              Jam Kedatangan
            </th>
            <th className="w-36 pl-2">Status Kehadiran</th>
          </tr>
          {kehadiran.map((absen, key) => {
            return (
              <>
                <tr key={key}>
                  <td className="p-2 border-2 bg-gray-50 hover:bg-gray-100 border-slate-300">
                    {absen.nama_ustadz}
                  </td>
                  <td className="p-2 border-2 bg-gray-50 hover:bg-gray-100 border-slate-300">
                    {absen.waktu_kehadiran}
                  </td>
                  {absen.waktu_kehadiran < "8:0:0" ? (
                    <td className="p-2 border-2 bg-gray-50 hover:bg-gray-100 border-slate-300 text-green-600">
                      Tidak terlambat
                    </td>
                  ) : (
                    <td className="p-2 border-2 bg-gray-50 hover:bg-gray-100 border-slate-300 text-red-600">
                      Terlambat
                    </td>
                  )}
                </tr>
              </>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default ListAbsen;
