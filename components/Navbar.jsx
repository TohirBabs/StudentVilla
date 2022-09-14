import React from "react";
import { MdSegment } from "react-icons/md";
import { IconContext } from "react-icons";
import { Button } from "@mui/material";

export const Navbar = () => {
  return (
    <nav className="sticky top-1 w-full rounded-2xl sm:max-w-5xl max-w-[96vw] z-10 mx-auto bg-gray-800 backdrop-filter backdrop-blur-lg bg-opacity-40">
      <div className="mx-auto px-4 py-2">
        <div className="flex items-center justify-between ">
          <span className="text-xl text-blue-800 font-semibold logo">
            Villa
          </span>
          <div className="flex space-x-4 text-gray-900 items-center">
            <Button
              style={{
                textTransform: "lowercase",
                borderRadius: "1rem",
                fontFamily: "DM Sans",
              }}
              variant="contained"
              href="#contained-buttons"
            >
              Sign up
            </Button>
            <IconContext.Provider
              value={{ className: "text-white", size: "1.5em" }}
            >
              <div>
                <MdSegment />
              </div>
            </IconContext.Provider>

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
