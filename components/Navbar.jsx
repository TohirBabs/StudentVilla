import React from "react";
import { MdSegment } from "react-icons/md";
import { IconContext } from "react-icons";
import { Button } from "@mui/material";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="w-full rounded-2xl sm:max-w-5xl max-w-[96vw] mx-auto">
      <div className="mx-8 p-4">
        <div className="flex items-center justify-between ">
          <span className="text-3xl text-blue-700 font-semibold logo">
            Villa
          </span>
          <div className="flex space-x-4 text-gray-900 items-center">
            <Link href="/templates">
              <Button
                style={{
                  textTransform: "lowercase",
                  borderRadius: "1rem",
                  fontFamily: "lobster",
                }}
                variant="contained"
                href="#contained-buttons"
              >
                create resume
              </Button>
            </Link>

            {/* <a href="#">Dashboard</a>
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a> */}
          </div>
        </div>
      </div>
    </nav>
  );
};
