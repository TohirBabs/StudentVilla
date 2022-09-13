import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

export const CarouselSlide = () => {
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
      src: "/home/portfolio.png",
      alt: "Image 1",
    },
    {
      id: 2,
      src: "/home/resume.png",
      alt: "Image 2 ",
    },
    {
      id: 3,
      src: "/home/portfolio.png",
      alt: "Image 3",
    },
  ];

  function Item(props) {
    return (
      <div
        key={props.item.id}
        className="w-[90vw] mx-auto rounded-3xl backdrop-filter bg-white backdrop-blur-lg bg-opacity-50"
      >
        <img src={props.item.src} alt={props.item.alt} />
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
    <Carousel animation="slide">
      {images.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};
