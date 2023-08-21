import axios from "axios";
import { useEffect, useState } from "react";
// import { QRCodeSVG } from "qrcode.react";
import QRCode from "react-qr-code";
import { Link } from "react-router-dom";
import { toPng } from "html-to-image";

const QrResult = ({ setShow }) => {
  const [result, setResult] = useState([]);

  const HandleCard = () => {
    setShow(false);
  };

  const fetchNewData = () => {
    axios.get("https://absensi.test/api/register-new").then((res) => {
      setResult(res.data.data);
    });
  };
  console.log(result);

  useEffect(() => {
    fetchNewData();
  }, []);

  return (
    <div className="flex h-screen left-0 fixed justify-center bg-blur pt-40 w-screen bottom-0 ">
      <div className="slide-bottom flex justify-center fixed rounded-md bg-gradient-to-r from-sky-600 to-cyan-400 h-auto w-[25%] p-8 pt-6">
        <div className="text-white">
          {result.map((res, key) => {
            let value = res.cust_id.toString();
            const downloadQRCode = () => {
              const qrCodeContainer =
                document.getElementById("qr-canvas")?.parentElement
                  ?.parentElement;
              toPng(qrCodeContainer, {
                backgroundColor: "white",
                height: 500,
                width: 500,
              })
                .then((dataUrl) => {
                  const link = document.createElement("a");
                  link.download = value;
                  link.href = dataUrl;
                  link.click();
                })
                .catch(function (error) {
                  console.error("oops, something went wrong!", error);
                });
            };
            return (
              <div key={key}>
                <QRCode value={value} id="qr-canvas" />
                <h1 className="text-center">
                  serial number kamu: <span className="font-bold">{value}</span>{" "}
                </h1>
                <h1 className="text-center mt-4">
                  <Link
                    onClick={downloadQRCode}
                    className="bg-white p-2 rounded-sm text-black">
                    Download Qr
                  </Link>
                </h1>
              </div>
            );
          })}

          <h1 className="text-center mt-4">
            <Link
              onClick={HandleCard}
              className="bg-white p-2 rounded-sm text-black">
              Tutup
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};
export default QrResult;
