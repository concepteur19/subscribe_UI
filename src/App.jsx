import "../src/styles/App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import LandingPage from "./Landing page/LandingPage";
import Home from "./views/pages/Home";
import Payment from "./views/pages/Payment";
import Setting from "./views/pages/Setting";
import AddSubscription from "./views/pages/subscription/addSubscription";
import Layout from "./views/layout/layout";
import AddSubscriptionParam from "./views/pages/subscription/subscriptionParam";

import SubscriptionDetails from "./views/pages/subscription/subscriptionDetails";
import { SignIn } from "./views/pages/Login/signIn";
import { SignUp } from "./views/pages/signUp/signUp";
// import CustomSubscriptionDetail from "./views/pages/subscription/customSubscriptionDetail";
import AddCustomSubscription from "./views/pages/subscription/AddCustomSubscription";
import ErrorPage from "./views/pages/ErrorPage";
// import PrivateRoute from "./views/components/auth/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container relative text-white-2 text-sm font-redRose">
        <Routes>
          <Route path="/signUp" Component={SignUp} />
          <Route path="/Login" Component={SignIn} />
          <Route path="/" Component={LandingPage} />
          <Route
            path="/"
            element={
              // <PrivateRoute>
                <Layout />
              // </PrivateRoute>
            }
          >
            <Route path="/home" Component={Home} />
            <Route path="/payments" Component={Payment} />
            <Route path="/settings" Component={Setting} />
            <Route path="/home/addSubscription" Component={AddSubscription} />
            <Route
              path="/home/addSubscription/custom"
              Component={AddCustomSubscription}
            />
            {/* <Route
              path="/home/subscription/custom/:id"
              Component={CustomSubscriptionDetail}
            /> */}
            <Route
              path="/home/addSubscription/:id"
              Component={AddSubscriptionParam}
            />
            <Route
              path="/home/subscription/:id"
              Component={SubscriptionDetails}
            />
          </Route>
          <Route path="/error" Component={ErrorPage} />
          <Route path="*" element={<Navigate to="/error" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
