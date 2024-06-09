import React from "react";

function ErrorPage() {
  return (
    <div className="space-y-6 py-80 text-center ">
      {/* <div className=" "> */}
        <h1 className=" font-redRoseBold text-9xl">404</h1>
        <h2 className=" font-redRoseBold text-5xl">Page Not Found</h2>
        <p className=" font-light text-lg">
          We couldn't find what you where looking for
        </p>
      {/* </div> */}
    </div>
  );
}

export default ErrorPage;
