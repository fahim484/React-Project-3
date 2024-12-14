import { themeColor } from "../../lib/utils";
import Footer from "../shared/Footer";
import HeaderNavbar from "../shared/Navbar";

export const Warper = ({ children, isDark }) => (
  <div className={themeColor(isDark)}>
    <HeaderNavbar isDark={isDark} />
    {children}
    <Footer isDark={isDark} />
  </div>
);