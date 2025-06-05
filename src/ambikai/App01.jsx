import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
// import Footer from "./Footer/Footer";
import ScrollToTop from "../components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="wrap">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
