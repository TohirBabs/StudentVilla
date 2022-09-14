import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button } from "@mui/material";
import { CarouselSlide } from "./Carousel";

export const Banner = () => {
  return (
    <div className="flex-1 flex flex-col">
      <main className="my-auto max-w-5xl  p-4 text-center">
        <p className="text-xl">Create your resume in 3 easy steps</p>
        <CarouselSlide />
      </main>
    </div>
  );
};
