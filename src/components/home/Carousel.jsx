import { Button } from "@nextui-org/react";
import { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

function Carousel() {
  const CarouselData = [
    {
      id: 1,
      image: "Img/home/carousel/slider.png",
      heading: "Wizkid made in lagos tour",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
      id: 2,
      image: "Img/home/carousel/slider.png",
      heading: "Hablu Programmer Is The Best",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
      id: 3,
      image: "Img/home/carousel/slider.png",
      heading: "We Learning Full Stack Web Development",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
  ];

  const TagData = [
    {
      id: 1,
      img: "Img/home/carousel/Calendar.png",
      title: "Dec 12 2024",
    },
    {
      id: 2,
      img: "Img/home/carousel/Mark.png",
      title: "TBS  Lagos",
    },
    {
      id: 3,
      img: "Img/home/carousel/Clock.png",
      title: "9:00 PM",
    },
    {
      id: 4,
      img: "Img/home/carousel/Tag.png",
      title: "N20,000",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };
  const currentSlider = CarouselData[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? CarouselData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === CarouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="overflow-hidden p-12">
      <h1 className="text-center text-[#26395C] text-3xl lg:text-[42px] lg:leading-[42px] font-bold">
        See How People are Chilling On Chillsbay
      </h1>

      <div className="relative w-full max-w-screen-2xl container mx-auto mt-10">
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrev}
            className="absolute left-0 transform -translate-x-6 flex items-center justify-center text-[#26395C] rounded-full w-12 h-12"
          >
            <SlArrowLeft size={60} />
          </button>

          <div className="flex flex-col lg:flex-row items-center gap-6 w-full px-12">
            {/* Left Side */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-[#26395C] text-2xl font-bold lg:text-[32px] lg:leading-[38px] lg:ms-10 text-center lg:text-start">
                Upcoming events this weekend
              </h3>
              <img
                className="object-cover w-full h-auto"
                src={currentSlider.image}
                alt="Carousel Image"
              />
            </div>

            {/* Right Side */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              <h2 className="text-[#26395C] text-2xl lg:text-[42px] lg:leading-[54px] font-bold lg:w-[50%] leading-tight">
                {currentSlider.heading}
              </h2>
              <p className="text-[#26395C] lg:w-[70%] text-xl leading-[30px]">
                {currentSlider.des}
              </p>

              <div className="grid grid-cols-2 lg:w-[60%]">
                {TagData.map((data, id) => (
                  <div key={id} className="flex items-center mt-5 mb-5">
                    <img src={data.img} alt="Carousel Logo" />
                    <p className="text-[#26395C] ms-2 text-xl leading-[18px] font-bold">
                      {data.title}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <Button
                  color="primary"
                  variant="bordered"
                  size="lg"
                  className="font-bold"
                >
                  Add To Cart
                </Button>
                <Button color="primary" size="lg" className="font-bold">
                  Book Now
                </Button>
              </div>

              <div className="flex gap-4 mt-5">
                <p>Connect with us on:</p>

                <div className="flex gap-3">
                  <img src="Img/home/carousel/Twitter.png" alt="" />
                  <img src="Img/home/carousel/Instagram.png" alt="" />
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 transform -translate-x-6 flex items-center justify-center text-[#26395C] rounded-full w-12 h-12"
          >
            <SlArrowRight size={60} />
          </button>
        </div>

        <div className="flex justify-center items-center gap-2 mt-6">
          {CarouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-[#26395C]" : "bg-[#969DAA]"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Carousel;
