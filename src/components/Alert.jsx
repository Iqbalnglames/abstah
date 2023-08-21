import { useState } from "react";
const Alert = () => {
  const [isVisible, setIsVisible] = useState(false);

  setInterval(() => {
    setIsVisible(!isVisible);
  }, 6000);

  return (
    <div>
      <div className="fixed flex flex-row bg-gray-900 h-10 w-[400px] rounded-[30px]">
        <span className="flex flex-col justify-center text-white font-bold grow-[1] max-w-[90%] text-center">
          Jangan sekali-kali menekan tombol logout!
        </span>
        <div className="w-[10%] bg-red-500 rounded-r-2xl shadow-[0_0_40px_##0373FC] text-center pt-1 text-lg font-bold text-white items-center">
          !
        </div>
      </div>
    </div>
  );
};
export default Alert;
