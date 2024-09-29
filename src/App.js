import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Ourteam from "./components/Ourteam";


export default function App() {
  return (
<div className=" overflow-x-hidden  flex flex-col justify-center items-center gap-10">
  <BrowserRouter>
  <Navbar />
  <div>
    <Routes>
      <Route path={"/"} element={<Home />}></Route>
      <Route path={"/services"} element={<Services />}></Route>
      <Route path={"/about"} element={<Aboutus />}></Route>
      <Route path={"/contact"} element={<Contact />} ></Route>
      <Route path={"/gallery"} element={<Gallery />} ></Route>
      <Route path={"/team"} element={<Ourteam/>} ></Route>
    </Routes>
  </div>
   <Footer />
  </BrowserRouter>
</div>
  )
}