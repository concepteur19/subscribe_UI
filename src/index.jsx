import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// fonts exo2, isidora & poiretOne
// import "./fonts/Exo2-Bold.ttf";
// import "./fonts/Exo2-Regular.ttf";
// import "./fonts/Exo2-Light.ttf";
// import "./fonts/Exo2-SemiBold.ttf";
// import "./fonts/isidora-bold.otf";
// import "./fonts/isidora-medium.otf";
// import "./fonts/isidora-regular.otf";
// import "./fonts/PoiretOne-Regular.ttf";
// import "./fonts/RedRose-Regular.ttf";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="1034897670198-hde1kharb8moudks3mka0iobeb67paep.apps.googleusercontent.com">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
