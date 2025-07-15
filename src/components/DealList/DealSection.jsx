import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";
import ProductCard from "./ProductCard";
import { Items } from "../../Data";

const DealSection = () => {
  return (
    <div className="w-full overflow-hidden">

    <dir className="flex items-center justify-center gap-10">
      <button><FaChevronLeft /></button>
      <div className="text-center py-6">
        <h3 className="text-lg font-semibold">DEAL OF THE DAY</h3>
        <a
          href="#"
          className="text-sm text-zinc-400 underline mt-1 inline-block"
          >
          VIEW ALL
        </a>
      </div>
      <button><FaChevronRight  /></button>
    </dir>

    <div className="mx-9 w-full overflow-hidden">
       <div className="grid grid-cols-2 md:grid-cols-4    ">

         
      { Items.map((item,index)=>(
        <ProductCard key={index} Items ={item} />
      ))}
    </div>
    </div>
          </div>
  );
};

export default DealSection;
