
import './App.css'
import {Outlet} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Contact from "./pages/Contact.jsx";
function App() {

  return (
    <>
      <NavBar/>
    <Outlet/>
        <Contact/>
    </>
  )
}

export default App
