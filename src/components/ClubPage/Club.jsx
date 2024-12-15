import Hero from "./Hero";
import Map from "../common/Map";
import Restaurants from "../common/RestaurantsCard";
import Carousel from "../common/Carousel";

const Club = () => {
  return (
    <main>
      <Hero />
      <Restaurants isDark api="/club-data.json" title="Popular Night Clubs" />
      <Carousel isDark data={CarouselData} tags={TagData} />
      <Restaurants
        isDark
        api="/club-data.json"
        title="Bars and Night clubs near you"
      />
      <Map isDark />
    </main>
  );
};

export default Club;

const CarouselData = [
  {
    id: 1,
    image: "/Img/club/ClubCarousel.png",
    heading: "The 90s with Dj Neptune",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    id: 2,
    image: "/Img/club/ClubCarousel.png",
    heading: "Hablu Programmer Is The Best",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    id: 3,
    image: "/Img/club/ClubCarousel.png",
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
