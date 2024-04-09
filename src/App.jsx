import "../src/styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./views/components/layout/Narbar";
import Main from "./views/components/layout/Main";
// import LandingPage from "./Landing page/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/:page" element={<Navbar />} />
        </Routes>
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
