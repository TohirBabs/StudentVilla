import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button } from "@mui/material";
import { CarouselSlide } from "./Carousel";

export const Banner = () => {
  return (
    <div className=" ">
      <main className="mt-10 max-w-5xl mx-auto p-4 text-center">
        <h1 className="text-center text-3xl ">
          Create your resume with <span className="text-blue-600">Villa</span>
        </h1>
        <p className="text-center ">
          The fastest resume generator for students by students
        </p>
        <div className="my-10 ">
          <CarouselSlide />
        </div>
        <Button
          style={{
            borderRadius: "1rem",
            fontFamily: "monospace",
            position: "relative",
            top: "2rem",
          }}
          variant="contained"
          href="#contained-buttons"
        >
          Create Resume
        </Button>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
};
