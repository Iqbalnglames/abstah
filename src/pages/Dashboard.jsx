import { Link } from "react-router-dom"

const Dashboard = () => {
    const role = 'user'
    return (
        <div className="">
            <div className="text-center">
                <h1>Dashboard</h1>
            </div>
            <div className="flex justify-center space-x-16 mt-8">
                <Link to={'/absen'} className="hover:scale-105 transition-transform h-64 w-2/5 bg-gradient-to-r from-sky-600 to-cyan-400 rounded-md text-white">
                    <div className="text-center mt-[90px] text-3xl px-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="h-12 w-12 inline" viewBox="0 0 16 16">
                            <path d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0v-3Zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5ZM.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Zm15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5ZM4 4h1v1H4V4Z" />
                            <path d="M7 2H2v5h5V2ZM3 3h3v3H3V3Zm2 8H4v1h1v-1Z" />
                            <path d="M7 9H2v5h5V9Zm-4 1h3v3H3v-3Zm8-6h1v1h-1V4Z" />
                            <path d="M9 2h5v5H9V2Zm1 1v3h3V3h-3ZM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8H8Zm2 2H9V9h1v1Zm4 2h-1v1h-2v1h3v-2Zm-4 2v-1H8v1h2Z" />
                            <path d="M12 9h2V8h-2v1Z" />
                        </svg>
                        <h1 className="inline"> Absensi Qr Code</h1>
                        <h1 className="text-sm mt-2"> Absensi Kehadiran Asatidzah untuk mengajar menggunakan barcode masing masing sesuai waktunya</h1>
                    </div>
                </Link>
                <Link style={role === 'admin' ? null : {pointerEvents: 'none'}} className="h-64 hover:scale-105 transition-transform w-2/5 bg-gradient-to-r from-sky-600 to-cyan-400 rounded-md text-white">
                    <div className="text-center mt-[90px] text-3xl px-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="h-12 w-12 inline" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z" />
                            <path d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338v.041zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635V5z" />
                        </svg>
                        <h1 className="inline"> List Absensi</h1>
                        <h1 className="text-sm mt-2">Login sebagai admin untuk mengakses halaman ini</h1>
                    </div>
                </Link>

            </div>
        </div>
    )
}
export default Dashboard