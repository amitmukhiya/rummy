import "./App.css";
import "react-slideshow-image/dist/styles.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Privacy from "./components/Privacy";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TermsCondition from "./components/Terms_Condition";
import Legality from "./components/Legality";
import GoToTop from "./components/GoToTop";
function App() {
  return (
    <>
      <Router>
        <GoToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Features />} /> */}
          <Route path="/" element={<Main />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms_conditions" element={<TermsCondition />} />
          <Route path="/legality" element={<Legality />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
