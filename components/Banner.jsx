import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button } from "@mui/material";
import { CarouselSlide } from "./Carousel";

export const Banner = () => {
  return (
    <div className="flex-1 flex flex-col">
      <main className=" max-w-5xl  px-4 text-center">
        <p className="text-xl my-4">Create your resume in 3 easy steps</p>
        <CarouselSlide />
      </main>
    </div>
  );
};
