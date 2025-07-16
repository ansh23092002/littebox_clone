import React from "react";

const About = () => {
  return (
    <div>
        
      <div className="flex flex-col justify-center items-center">
        <div>
          <h1 className="p-4 text-xl font-semibold max-md:text-[10px] ">
        
            When you shop at LittleBox, you take a stand against
          </h1>
        </div>
        <div className=" w-screen flex justify-center md:gap-9 max-md:justify-around uppercase ">
          <div className="relative bg-black rounded-xl h-30 w-28 md:h-50 md:w-48 ">
            <p className=" absolute inset-6  text-white">overproduction</p>
          </div>
          <div className="relative bg-black rounded-xl h-30 w-28 md:h-50 md:w-48">
            <p className=" absolute p-5 text-white">overproduction</p>
          </div>
          <div className="relative bg-black rounded-xl h-30 w-28 md:h-50 md:w-48">
            <p className=" absolute inset-6 text-white">overproduction</p>
          </div>
        </div>
      </div>

      <div className=" flex justify-center flex-col items-center ">
        <h1 className="text-5xl font-bold">littlebox</h1>
        <p className=" font-bold pt-2">#GoBeYou</p>
        <p className="max-w-2xl text-[14px]">
          The ultimate fashion destination for trendsetters who want the insta
          ready, celeb worthy looks & they want them now.With daily drops of
          fresh styles, fast free delivery & easy peasy returns , your best fit
          is right here.
        </p>
      </div>

      <img src="about/about.PNG" alt="about" className="w-screen object-cover " />
    </div>
  );
};

export default About;
