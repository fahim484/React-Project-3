import "./App.css";
import Carousel from "./components/home/Carousel";
import ChillsBay from "./components/home/Chillsbay";
import Footer from "./components/home/Footer";
import GALLERY from "./components/home/GALLERY";
import HeroArea from "./components/home/HeroArea";
import ImgSection from "./components/home/ImgSection";
import ThingsCard from "./components/home/ThingsToDo";
import HeaderNavbar from "./components/shared/Navbar";

function App() {
  return (
    <>
      <HeaderNavbar />
      <HeroArea />
      <ImgSection />
      <ThingsCard />
      <ChillsBay />
      <Carousel />
      <GALLERY />
      <Footer />
    </>
  );
}

export default App;
