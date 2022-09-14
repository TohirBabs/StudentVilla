import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button } from "@mui/material";
import { CarouselSlide } from "./Carousel";

export const Banner = () => {
  return (
    <div className="flex-1 flex flex-col">
      <main className="my-auto max-w-5xl  p-4 text-center">
        <h1 className="text-center text-2xl ">
          Create your resume with{" "}
          <span className="text-blue-600 logo">Villa</span>
        </h1>

        <CarouselSlide />
        <Button
          style={{
            borderRadius: "1rem",
            fontFamily: "DM Sans",
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
