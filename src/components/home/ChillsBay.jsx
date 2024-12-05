function ChillsBay() {
  const cardsInfo = [
    {
      logo: "/Img/home/chills-bay/logo-1.png",
      title: "Your  entire  trip in one checkout!",
      des: "Add multiple experiences to your cart and checkout on one click.",
    },
    {
      logo: "/Img/home/chills-bay/logo-2.png",
      title: "Pay with Crypto on the go",
      des: "Enjoy the freedom of universal payments for a seamless marketplace experience",
    },
    {
      logo: "/Img/home/chills-bay/logo-3.png",
      title: "Free Cancellation and ticket transfer",
      des: "Resell your tickets or cancel your reservations at zero cost 24 hours before.",
    },
  ];

  return (
    <section>
      <h1 className="text-center text-[#26395C] text-3xl lg:text-[42px] lg:leading-[42px] font-bold mt-[64px] mb-10">
        Why Use Chillsbay?
      </h1>

      <div className="container bg-[#F5FAFF] grid grid-cols-1 lg:grid-cols-3 mx-auto my-10 p-12 rounded-2xl shadow-xl">
        {cardsInfo.map((card, index) => (
          <div key={index} className="mt-10">
            <img className="w-fit mx-auto" src={card.logo} alt="Card Image" />

            <div className="w-[60%] mx-auto text-center">
              <h3 className="text-3xl font-bold lg:text-[32px] lg:leading-[38px] mt-4 mb-3">{card.title}</h3>
              <p className="text-2xl leading-[34px]">{card.des}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ChillsBay;
