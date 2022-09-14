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
      src: "/home/red.png",
      alt: "Image 1",
      text: "1.    pick a template",
    },
    {
      id: 2,
      src: "/home/gas.png",
      alt: "Image 2 ",
      text: "2.    make your resume",
    },
    {
      id: 3,
      src: "/home/taxi.png",
      alt: "Image 3",
      text: "3. customize the design",
    },
    {
      id: 4,
      src: "/home/bike.png",
      alt: "Image 4",
      text: "Download in pdf or doc",
    },
  ];

  function Item(props) {
    return (
      <div className="relative overflow-hidden w-[90vw] h-[50vh]">
        <img
          src={props.item.src}
          alt={props.item.alt}
          className="absolute -z-1 w-[150vw]"
        />
        <div
          key={props.item.id}
          className="h-[50vh] flex items-center mx-auto rounded-3xl pb-3 relative  bg-blue-500  backdrop-filter backdrop-blur-sm bg-opacity-10"
        >
          <h2 className="text-6xl sec-font text-left text-blue-400 px-12 my-auto">
            {props.item.text}
          </h2>
        </div>
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
