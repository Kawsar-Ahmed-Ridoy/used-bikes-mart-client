import React from "react";
import image1 from "../../../assets/image1.jpg";
import image2 from "../../../assets/image2.jpg";
import image3 from "../../../assets/image3.jpg";

const Banner = () => {
  return (
    <div className="mb-16">
      <>
        <div style={{ height: "93vh" }} className="carousel w-full ">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="bg-primary absolute opacity-20 h-full w-full"></div>
            <img src={image1} alt="" className="w-full" />

            <div
              style={{ height: "90vh", textTransform: "uppercase" }}
              className="absolute flex justify-center align-middle w-full text-center text-5xl
        font-serif text-white "
            >
              <h2 className="my-auto leading-tight">
                welcome to my, Used
                <br /> Bikes Mart <br />
                website
              </h2>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle bg-primary border-none text-accent">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle bg-primary border-none text-accent">
                ❯
              </a>
            </div>
          </div>

          <div id="slide2" className="carousel-item relative w-full">
            <div className="bg-primary absolute opacity-20 h-full w-full"></div>
            <img src={image2} alt="" className="w-full" />
            <div
              style={{ height: "90vh", textTransform: "uppercase" }}
              className="absolute flex justify-center align-middle w-full text-center text-5xl  font-serif text-white"
            >
              <h2 className="my-auto leading-tight">
                welcome to my, Used
                <br /> Bikes Mart <br />
                website
              </h2>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle bg-primary border-none text-accent">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle bg-primary border-none text-accent">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <div className="bg-primary absolute opacity-20 h-full w-full"></div>
            <img src={image3} alt="" className="w-full" />
            <div
              style={{ height: "90vh", textTransform: "uppercase" }}
              className="absolute flex justify-center align-middle w-full text-center text-5xl  font-serif text-white"
            >
              <h2 className="my-auto leading-tight">
                welcome to my, Used
                <br /> Bikes Mart <br />
                website
              </h2>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle bg-primary border-none text-accent">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle bg-primary border-none text-accent">
                ❯
              </a>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Banner;
