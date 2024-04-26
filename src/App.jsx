import "../src/styles/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./views/components/layout/Narbar";
import Main from "./views/components/layout/Main";
import MobileNav from "./views/components/layout/MobileNav";
// import LandingPage from "./Landing page/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container ">
        <Navbar />
        <Main />
      </div>
      <MobileNav />
    </BrowserRouter>
  );
}

export default App;
