import React, { useEffect, useState } from "react";
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import { PostersImages } from "../../Data";

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const autoplay = true;
  const autoSlideInterval = 2000;
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Change image button
  useEffect(() => {
    if (!autoplay) return;
    const SlideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => {
      clearInterval(SlideInterval);
    };
  }, [current, autoplay]);

  const nextSlide = () => {
    setCurrent(current === PostersImages.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? PostersImages.length - 1 : current - 1);
  };

  return (
    <div className="main flex items-center relative h-full w-full gap-1">
      <div className=" h-full w-full ">
        {PostersImages.map(
          (item, index) =>
            current === index && (
              <img
                key={index}
                src={isMobile ? PostersImages[current].mbsrc : PostersImages[current].Dtsrc}
                className="h-full w-full object-cover"
              />
            )
        )}
      </div>
      <div className="absolute flex justify-between items-center h-full w-full  ">
        <button className="bg-black/70 py-3 px-2 " onClick={prevSlide}>
          <FaLessThan size={20} />
        </button>
        <button className="bg-black/70 py-3 px-2 " onClick={nextSlide}>
          <FaGreaterThan size={20} />
        </button>
      </div>
      <div className="absolute flex  gap-2 items-center bottom-3  left-1/2">
        {PostersImages.map((_, i) => (
          <div
            key={i}
            className={`items-center flex h-3 w-3 bg-white rounded-full ${
              current === i ? "p-2" : "opacity-40"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
