import React from "react";
import CardImage1 from "../../assets/pexels-sergio-arreola-16400334.jpg";

const Card = () => {
  return (
    <>
      <section className="grid grid-cols-2">
        <div className="mt-[400px] pl-[80px]">
          <h1 className="text-3xl">
            Featured <br /> <span className="font-bold">Work</span>
          </h1>
          <h3>
            04 Randelo Co., 2020 <br />
            05 Stipple Unlimited Co, 2020
          </h3>
        </div>
        {/*  */}

        <section className="flex gap-5 bg-red-400">
          <div className="w-[200px] flex flex-col gap-4 mt-10 animated-images">
            <img src={CardImage1} alt="" className="left-image-animation" />
            <img src={CardImage1} alt="" className="left-image-animation" />
            <img src={CardImage1} alt="" className="left-image-animation" />
            <img src={CardImage1} alt="" className="left-image-animation" />
          </div>
          {/*  */}

          <div className="w-[200px] flex flex-col gap-4 mt-10 right-animated-images">
            <img src={CardImage1} alt="" className="image-animation" />
            <img src={CardImage1} alt="" className="image-animation" />
            <img src={CardImage1} alt="" className="image-animation" />
            <img src={CardImage1} alt="" className="image-animation" />
          </div>
        </section>

        {/* Right side */}
        <section className="flex gap-5"></section>
      </section>
    </>
  );
};

export default Card;
