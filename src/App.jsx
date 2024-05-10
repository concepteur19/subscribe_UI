import "../src/styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import MobileNav from "./views/components/layout/MobileNav";
import LandingPage from "./Landing page/LandingPage";
import Home from "./views/pages/Home";
import Payment from "./views/pages/Payment";
import Setting from "./views/pages/Setting";
import AddSubscription from "./views/pages/subscription/addSubscription";
import Layout from "./views/layout/layout";
import AddSubscriptionParam from "./views/pages/subscription/addSubscriptionParam";
// <<<<<<< HEAD
// import LoginPage from "./views/pages/signIn/connexionPage";
// import SignUpPage from "./views/pages/signUp/registrionPage"
import SubscriptionDetails from "./views/pages/subscription/subscriptionDetails";
// =======

import { SignIn } from "./views/pages/Login/signIn";
import { SignUp } from "./views/pages/signUp/signUp";
// >>>>>>> 8b3392c0c6e5ec18aff38cc5d7e34ae5dc65ead1

function App() {

  return (
    <BrowserRouter>
      <div className="app-container text-white-0 text-sm font-redRose">

        <Routes>
          <Route path="/signUp" Component={SignUp} />
          <Route path="/Login" Component={SignIn} />
          <Route path="/" Component={LandingPage} />
          <Route path="/" Component={Layout}>
            <Route path="/home" Component={Home} />
            <Route path="/payments" Component={Payment} />
            <Route path="/settings" Component={Setting} />
            <Route path="/home/addSubscription" Component={AddSubscription} />
            <Route path="/home/addSubscription/:param" Component={AddSubscriptionParam} />
            <Route path="/home/subscription/:id" Component={SubscriptionDetails} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
