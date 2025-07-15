import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";
// import ProductCard from "./ProductCard";

const DealSection = () => {
  return (
    <div>

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

    <div>
       {/* <ProductCard/> */}
    </div>
          </div>
  );
};

export default DealSection;
