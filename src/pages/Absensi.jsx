import Alert from "../components/alert"
import { useState } from 'react'
import { QrReader } from "react-qr-reader";


const Kehadiran = () => {
  const [data, setData] = useState('')
  const [button, setButton] = useState(false)

  const handleButton = () => {
    setButton(!button)
  }

  return (
    <>
      <Alert />
      <div className="flex justify-center text-center">
        <div>
          <button className="mt-10 p-2 bg-gradient-to-r from-sky-600 to-cyan-400 text-white rounded hover:scale-105 transition-transform" onClick={handleButton}>{!button ? 'Mulai Scan' : 'Hentikan Scan'}</button>
          <div>{data === '' ? 'silahkan scan' : data}</div>
          {button ? <QrReader
            onDecode={(result) => setData(result)}
            onerror={(error) => setData(error)}
            className="-mt-10 w-96"
          /> : null}
        </div>
      </div>
    </>
  )
}
export default Kehadiran