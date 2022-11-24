import "./App.css";
import "react-slideshow-image/dist/styles.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Home />
        {/* <Features /> */}
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
