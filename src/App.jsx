import "../src/styles/App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./views/components/layout/Narbar";
import Main from "./views/components/layout/Main";

import MobileNav from "./views/components/layout/MobileNav";
import LandingPage from "./Landing page/LandingPage";
import Home from "./views/pages/Home";
import Payment from "./views/pages/Payment";
import Setting from "./views/pages/Setting";
import AddSubscription from "./views/pages/subscription/addSubscription";
import Layout from "./views/pages/layout/layout";
import AddSubscriptionParam from "./views/pages/subscription/addSubscriptionParam";

function App() {

  return (
    <BrowserRouter>
      <div className="app-container ">

        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="/" Component={Layout}>
            <Route path="/home" Component={Home} />
            <Route path="/payments" Component={Payment} />
            <Route path="/settings" Component={Setting} />
            <Route path="/home/addSubscription" Component={AddSubscription} />
            <Route path="/home/addSubscription/:param" Component={AddSubscriptionParam} />
            <Route path="/home/subscription/:id" Component={AddSubscription} />
          </Route>
        </Routes>
      </div>
      <MobileNav />
    </BrowserRouter>
  );
}

export default App;
