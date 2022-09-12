import React from "react";
import { MdSegment } from "react-icons/md";
import { IconContext } from "react-icons";
import { Button } from "@mui/material";

export const Navbar = () => {
  return (
    <nav className="sticky top-2 rounded-2xl sm:max-w-5xl max-w-[96vw] z-10 mx-auto bg-white text-black backdrop-filter backdrop-blur-lg bg-opacity-70">
      <div className="mx-auto px-4 py-2">
        <div className="flex items-center justify-between ">
          <span className="text-xl text-gray-900 font-semibold">Villa</span>
          <div className="flex space-x-4 text-gray-900">
            <Button
              style={{ textTransform: "lowercase", borderRadius: "2rem" }}
              variant="contained"
              href="#contained-buttons"
            >
              Sign in
            </Button>
            <IconContext.Provider value={{ className: "", size: "2em" }}>
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
