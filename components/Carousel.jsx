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
      text: "pick a template",
    },
    {
      id: 2,
      src: "/home/resume.png",
      alt: "Image 2 ",
      text: "make your resume",
    },
    {
      id: 3,
      src: "/home/portfolio.png",
      alt: "Image 3",
      text: "customize the design",
    },
  ];

  function Item(props) {
    return (
      <div
        key={props.item.id}
        className="w-[80vw] mx-auto rounded-2xl pb-3  bg-black backdrop-filter backdrop-blur-lg bg-opacity-30"
      >
        <img src={props.item.src} alt={props.item.alt} />
        <h2 className="text-4xl text-blue-500">{props.item.text}</h2>
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
