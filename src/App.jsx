import "./App.css";
import ChillsBay from "./components/home/Chillsbay";
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
    </>
  );
}

export default App;
