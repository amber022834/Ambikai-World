import { Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import Aboutme from './aboutme';
import Contact from './contact';
import Gallery from './gallery';
import Article from './article';
// import Footer from './Footer/Footer';
import ScrollToTop from "../component/ScrollToTop";
// import BacktoTop from '../component/BacktoTop'


function App() {
  return (
    <>
      <ScrollToTop />
      <div className="wrap">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
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




















































































































































































