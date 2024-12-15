import DrinkHero from "./DrinkHero";
import FindPlace from "./FindPlace";
import Restaurants from "../common/RestaurantsCard";
import Map from "../common/Map";
import Carousel from "../common/Carousel";

function DrinkPage() {
  return (
    <>
      <DrinkHero />
      <FindPlace />
      <Restaurants api="/data.json" title="Popular Restaurants in Lagos" />
      <Carousel data={CarouselData} tags={TagData} />
      <Restaurants api="/data.json" title="Restaurants nearby" />
      <Map />
    </>
  );
}

export default DrinkPage;

const CarouselData = [
  {
    id: 1,
    image: "Img/drink/DrinkCarousel.png",
    heading:
      "GTCO Food and Drink Festival 2022: Africa’s Biggest Food and Drink Festival",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    id: 2,
    image: "Img/slider.png",
    heading: "Hablu Programmer Is The Best",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    id: 3,
    image: "Img/drink/DrinkCarousel.png",
    heading: "We Learning Full Stack Web Development",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
];

const TagData = [
  {
    id: 1,
    img: "Img/Calendar.png",
    title: "Dec 12 2024",
  },
  {
    id: 2,
    img: "Img/Mark.png",
    title: "TBS  Lagos",
  },
  {
    id: 3,
    img: "Img/Clock.png",
    title: "9:00 PM",
  },
  {
    id: 4,
    img: "Img/Tag.png",
    title: "N20,000",
  },
];
