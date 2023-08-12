import PathName from "./components/Routes"
import Navbar from "./components/navbar"

function App() {

  return (
    <>
      <Navbar />
      <div className="fixed left-64 top-20 right-10">
      <PathName />
      </div>
    </>
  )
}

export default App
