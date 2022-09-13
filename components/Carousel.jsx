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
        className="w-[80vw] mx-auto"
        style={{
          borderRadius: "30px",
          background: "linear-gradient(225deg, #133477, #163e8d)",
          boxShadow: "-6px 6px 16px #081735,6px -6px 16px #225dd3",
        }}
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
    <Carousel animation="slide" className="my-6 py-6">
      {images.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};
