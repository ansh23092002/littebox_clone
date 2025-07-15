import React from "react";
import { Products } from "../Data";

const Hero = () => {
  return (
    <div>

    <div className=" flex md:hidden  overflow-x-auto whitespace-nowrap px-4 py-2 border-b border-gray-200 ">
      <div className="flex justify-betweent ">
        {Products.map((items) => (
          <div
          id={items.id}
          className=" flex flex-col  items-center text-sm font-semibold text-gray-700"
          >
            <img
              src={items.src}
              alt="img"
              className="w-14 h-14 bg-gray-200 rounded-full"
            />
            <p className="uppercase mt-1 ">{items.title}</p>
          </div>
        ))}
      </div>

        </div>
      

      <div className="">
        <img
          src="https://littleboxindia.com/cdn/shop/files/final1.jpg?v=1747641453&width=1080"
          alt="Ocean Core Collection"
          className="w-full h-[500px] object-cover"
        />

      </div>
          </div>
  );
};

export default Hero;