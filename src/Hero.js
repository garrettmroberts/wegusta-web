import together from "./together.svg";
import HeroImage from "./HeroImage.png";
import "./Hero.scss";
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
      <img src={HeroImage} className="HeroImage" alt="Hero Image" />
    </div>
  );
}

export default Hero;
