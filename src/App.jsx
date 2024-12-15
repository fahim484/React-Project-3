import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderNavbar from "./components/shared/Navbar";
import HomePage from "./components/HomePage";
import Footer from "./components/shared/Footer";
import DrinkPage from "./components/DrinkPage/DrinkPage";
import ClubPage from "./components/ClubPage/Club";
import MyPayment from "./components/PaymentPage/Payment";
import Contact from "./components/ContactPage/Contact";
import { Warper } from "./components/common/Warper";

const App = () => {
  return (
    <>
      <Router>
        {/* <HeaderNavbar /> */}
        <Routes>
          <Route
            path="/"
            element={
              <Warper>
                <HomePage />
              </Warper>
            }
          />
          <Route
            path="/drink"
            element={
              <Warper>
                <DrinkPage />
              </Warper>
            }
          />
          <Route
            path="/club"
            element={
              <Warper isDark>
                <ClubPage />
              </Warper>
            }
          />
          <Route
            path="/cart"
            element={
              <Warper>
                <MyPayment />
              </Warper>
            }
          />
          <Route
            path="/contact"
            element={
              <Warper>
                <Contact />
              </Warper>
            }
          />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
};

export default App;
