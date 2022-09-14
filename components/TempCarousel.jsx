import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import Link from "next/link";

export const TempCarousel = () => {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];
  const images = [
    {
      id: 1,
      src: "/home/template1.png",
      alt: "Image 1",
      text: "1.    pick a template",
    },
    {
      id: 2,
      src: "/home/template2.png",
      alt: "Image 2 ",
      text: "2.    make your resume",
    },
    {
      id: 3,
      src: "/home/template3.png",
      alt: "Image 3",
      text: "3. customize the design",
    },
  ];

  function Item(props) {
    return (
      <div
        key={props.item.id}
        className="mx-auto rounded-3xl pb-3 relative  bg-blue-500  backdrop-filter backdrop-blur-sm bg-opacity-10"
      >
        <h2 className=" sec-font text-center text-blue-400  py-4">
          {props.item.text}
        </h2>
        <img src={props.item.src} alt={props.item.alt} className="mx-auto" />
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
            choose template
          </Button>
        </Link>
      </div>
    );
  }
  return (
    // <div className="my-10">
    //   <img
    //     src="/home/land_resume.png"
    //     className="sm:max-w-[80vw] w-[200vw] left-[10vw] "
    //   />
    //   </div>
    <Carousel animation="slide" className="my-3 py-6">
      {images.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};
