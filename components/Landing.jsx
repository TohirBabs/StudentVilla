import React from "react";
import { Banner } from "./Banner";
import { Navbar } from "./Navbar";

export const Landing = () => {
  return (
    <div className="h-screen flex flex-col justify-center">
      <Navbar />
      <Banner />
    </div>
  );
};
