import "./App.css";
import Carousel from "./components/HomePage/Carousel";
import ChillsBay from "./components/HomePage/Chillsbay";
import Footer from "./components/HomePage/Footer";
import GALLERY from "./components/HomePage/GALLERY";
import HeroArea from "./components/HomePage/HeroArea";
import ImgSection from "./components/HomePage/ImgSection";
import ThingsCard from "./components/HomePage/ThingsToDo";
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
