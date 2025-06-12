import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Aboutme from './Aboutme/Aboutme';
import Contact from './Contact/Contact';
import Gallery from './Gallery/Gallery';
import Article from './Article/Article';
// import Footer from './Footer/Footer';
import ScrollToTop from "../component/ScrollToTop";
// import BacktoTop from '../component/BacktoTop'


function App() {
  return (
    <>
      <ScrollToTop />
      <div className="wrap">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Aboutme" element={<Aboutme />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Article" element={<Article />} />
          
        </Routes>
    
      </div>

      
      {/* <BacktoTop /> */}
    </>
  );
}

export default App;




















































































































































































