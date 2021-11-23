import React, { useState } from "react";
import CarouselData from "./CarouselData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const Carousel = ({ carouselImgs }) => {
  const [current, setCurrent] = useState(0);
  const length = carouselImgs.length;

  const nextImg = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevImg = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(carouselImgs) || carouselImgs.length <= 0) {
    return null;
  }

  return (
    <section className="carousel">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevImg} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextImg} />
      {CarouselData.map((carousel, index) => {
        return (
          <div
            className={index === current ? "carouselItems active" : "carouselItems"}
            key={index}
          >
            {index === current && (
            <div>
                <h3 className="carouselCountry">{carousel.country}</h3>
                <img
                src={carousel.image}
                alt="travel image"
                className="carouselImage"
                /></div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Carousel;
