import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderNavbar from "./components/shared/Navbar";
import HomePage from "./components/HomePage";
import Footer from "./components/shared/Footer";
import DrinkPage from "./components/DrinkPage/DrinkPage";
import ClubPage from "./components/ClubPage/Club";

function App() {
  return (
    <>
    <Router>
        <HeaderNavbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/drink" element={<DrinkPage />}></Route>
          <Route path="/Club" element={<ClubPage />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
