import together from "../assets/together.svg";
import HeroImage from "../assets/HeroImage.png";
import "../styles/Hero.scss";
import Button from "./Button.js";

function Hero() {
  return (
    <div className="Hero">
      <div className="HeroLeftContent">
        <h1> We like,</h1>
        <img src={together} className="Together" alt="together" />
        <p>
          The first app to reccomend a restaurant based on everyones
          preferences. We’ve made dinner plans decisions easy and fun. Try our
          app today.
        </p>
        <div className="Form">
          <input
            className="Input"
            type="text"
            placeholder="Enter your phone number"
          ></input>
          <Button />
        </div>
      </div>
      <img src={HeroImage} className="HeroImage" alt="Hero" />
    </div>
  );
}

export default Hero;
