import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/splash.css";

import ajvLogo from "../assets/Ajv.gif";
import cartGif from "../assets/cart.gif";
import headphoneGif from "../assets/headphones.gif";
import rocketGif from "../assets/rocket.gif";
import shoeGif from "../assets/show.gif";

function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const splashShown = sessionStorage.getItem("splashShown");

    if (!splashShown) {
      sessionStorage.setItem("splashShown", "true");

      const timeout = setTimeout(() => {
        const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";
        navigate(isLoggedIn ? "/home" : "/login");
      }, 4500);

      return () => clearTimeout(timeout);
    } else {
      const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";
      navigate(isLoggedIn ? "/home" : "/login");
    }
  }, [navigate]);

  return (
    <div className="splash-container">
      <img src={ajvLogo} alt="Main Logo" className="main-logo" />

      <img src={cartGif} alt="Cart" className="gif cart" />
      <img src={headphoneGif} alt="Headphone" className="gif headphone" />
      <img src={rocketGif} alt="Rocket" className="gif rocket" />
      <img src={shoeGif} alt="Shoe" className="gif shoe" />

      <div className="loading-bar">
        <div className="loading-fill"></div>
      </div>
    </div>
  );
}

export default SplashScreen;
