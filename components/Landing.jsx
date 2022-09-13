import React from "react";
import { Banner } from "./Banner";
import { Navbar } from "./Navbar";

export const Landing = () => {
  return (
    <div className="max-h-screen">
      <Navbar />
      <Banner />
    </div>
  );
};
