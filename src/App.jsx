import "./App.css";
import HomePage from "./components/HomePage";
import Footer from "./components/HomePage/Footer";
import HeaderNavbar from "./components/shared/Navbar";

function App() {
  return (
    <>
      <HeaderNavbar />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
