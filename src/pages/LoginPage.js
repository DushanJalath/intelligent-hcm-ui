import React from "react";
import AccountLogin from "../components/AccountLogin";
import loginGif from "../assets/background.gif";

export default function LoginPage() {
  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${loginGif})` }}
    >
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4">
          <AccountLogin />
        </div>
      </div>
    </div>
  );
}
