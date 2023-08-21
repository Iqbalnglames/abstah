import QrScanner from "qr-scanner";
import { useState } from "react";
import UserCard from "../components/UserCard";

let stopScan = false;

const Kehadiran = () => {
  const [btnScan, setBtnScan] = useState(true);
  const [hasilScan, setHasilScan] = useState();
  const [card, setCard] = useState(false);

  const handleScan = async (isScan) => {
    setBtnScan(isScan);
    if (isScan) stopScan = true;
    if (btnScan == false) return;
    stopScan = false;
    await new Promise((r) => setTimeout(r, 50));
    const videoElement = document.getElementById("scanView");
    const scanner = new QrScanner(
      videoElement,
      (result) => {
        setHasilScan(result.data);
        setBtnScan(true);
        stopScan = true;
        setCard(!card);
      },

      {
        onDecodeError: (error) => {
          console.error(error);
        },
        maxScansPerSecond: 1,
        highlightScanRegion: true,
        highlightCodeOutline: true,
        returnDetailedScanResult: true,
      }
    );
    await scanner.start();
    while (stopScan == false) await new Promise((r) => setTimeout(r, 100));
    scanner.stop();
    scanner.destroy();
  };

  return (
    <div className="flex justify-center mb-10">
      {card ? (
        <div className="flex h-screen left-0 fixed justify-center bg-blur pt-40 w-screen bottom-0 z-20">
          <UserCard setCard={setCard} hasilScan={hasilScan} />
        </div>
      ) : null}
      <div className="block text-center mt-14 mb-10">
        <button
          className="hover:scale-105 transition-transform bg-gradient-to-r from-sky-600 to-cyan-400 rounded-sm p-2 mb-10 text-white "
          onClick={() => handleScan(!btnScan)}>
          Mulai Scan
        </button>
        <div className="border rounded-md border-black h-64">
          <video className="h-64 rounded-md" id="scanView" />
        </div>
      </div>
    </div>
  );
};

export default Kehadiran;
