import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import Kehadiran from "../pages/Absensi"
const PathName = () => {
    return (
        <Routes>
            <Route path={'/dashboard'} element={<Dashboard />} />
            <Route path={'/absen'} element={<Kehadiran />} />
        </Routes>
    )
}
export default PathName