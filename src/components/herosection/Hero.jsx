
import { Products } from "../../Data";
import Carousel from "./Carousel";



const Hero = () => {

 
            
  return (
    <div>
       

      {/* mobile view circuler porducts */}
      <div className=" flex md:hidden  overflow-x-auto whitespace-nowrap px-4 py-2 border-b border-gray-200 ">
        <div className="flex ">
          {Products.map((items) => (
            <div
              id={items.id}
              className=" flex flex-col  items-center text-sm font-semibold text-gray-700 p-2"
            > <div className="w-14 h-14">
              <img
                src={items.src}
                alt="img"
                className=" bg-gray-200 rounded-full"
              />

            </div>
              <p className="uppercase mt-1 ">{items.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
       <Carousel/>
      </div>
      
    </div>
  );
};

export default Hero;
