function ThingsCard() {
  const cards = [
    {
      imgSrc: "/Img/home/things-to-do/img-5.png",
      title: "Sight Seeing",
    },
    {
      imgSrc: "/Img/home/things-to-do/img-6.png",
      title: "Volley Ball Game",
    },
    {
      imgSrc: "/Img/home/things-to-do/img-7.png",
      title: "Wizkid Show",
    },
    {
      imgSrc: "/Img/home/things-to-do/img-7.png",
      title: "Wizkid Show",
    },
    {
      imgSrc: "/Img/home/things-to-do/img-5.png",
      title: "Sight Seeing",
    },
    {
      imgSrc: "/Img/home/things-to-do/img-6.png",
      title: "Volley Ball Game",
    },
    {
      imgSrc: "/Img/home/things-to-do/img-7.png",
      title: "Wizkid Show",
    },
    {
      imgSrc: "/Img/home/things-to-do/img-7.png",
      title: "Wizkid Show",
    },
  ];

  return (
    <section className="bg-[#F5FAFF] p-5">
      <div className="container mx-auto">
        <h1 className="text-center lg:text-start text-[#26395C] text-3xl lg:text-[32px] lg:leading-[54px] font-bold mt-[50px] mb-[30px]">
          Top things to do in Lagos
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-5 mb-10 mx-auto py-4 gap-x-5 gap-y-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center overflow-hidden"
            >
              <img
                className="w-full object-cover h-[300px] rounded-2xl" 
                src={card.imgSrc}
                alt="Card Image"
              />

              <div>
                <h2 className="text-[#26395C] text-2xl lg:text-[22px] lg:leading-[27px] font-bold mt-4">
                  {card.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ThingsCard;
