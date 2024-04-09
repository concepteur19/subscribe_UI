import React from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Setting from "../../pages/Setting";
import Payment from "../../pages/Payment";
import LandingPage from "../../../Landing page/LandingPage";

function Main() {
    const location = useLocation();
    const path = location.pathname !== "/";

  return (
    <main className={path? `px-[52px] pt-12`:''}>
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="/home" Component={Home} />
          <Route path="/payments" Component={Payment} />
          <Route path="/settings" Component={Setting} />
        </Routes>
    </main>
  );
}

export default Main;
