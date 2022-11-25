import "./App.css";
import "react-slideshow-image/dist/styles.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Privacy from "./components/Privacy";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Features />} /> */}
          <Route path="/" element={<Main />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
