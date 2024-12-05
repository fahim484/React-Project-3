import React from "react";

function ImgSection() {
  const cards = [
    {
      imgSrc: "/Img/home/img-section/img-1.png",
      title: "Eat & Drink",
    },
    {
      imgSrc: "/Img/home/img-section/img-2.png",
      title: "Events",
    },
    {
      imgSrc: "/Img/home/img-section/img-3.png",
      title: "Club",
    },
    {
      imgSrc: "/Img/home/img-section/img-4.png",
      title: "Things to do",
    },
  ];

  return (
    <section>
      <h1 className="text-center text-[#26395C] text-3xl lg:text-[42px] lg:leading-[54px] font-bold mt-[50px] mb-[30px]">
        What are you in the mood for?
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-5 mb-10 container mx-auto p-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center overflow-hidden"
          >
            <img className="w-full h-[500px] lg:h-[650px]" src={card.imgSrc} alt="Card Image" />

            <div>
              <h2 className="text-[#26395C] text-2xl lg:text-[32px] lg:leading-[38px] font-bold my-4">{card.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ImgSection;
