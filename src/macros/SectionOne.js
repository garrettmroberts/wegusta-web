import SectionImage from "../assets/SectionImage.png";
import userplus from "../assets/userplus.svg";
import CardStack from "../assets/CardStack.svg";
import heart from "../assets/heart.svg";
import "../styles/SectionOne.scss";

function SectionOne() {
  return (
    <div className="SectionOne">
      <img
        src={SectionImage}
        className="SectionOneImage"
        alt="SectionOne Image"
      />
      <div className="SectionOneContent">
        <h2>Dinner plans, done.</h2>
        <div className="Step">
          <div className="step-icon">
            <img src={userplus} alt="Add user" />
          </div>
          <div className="text-content">
            <h3>Invite friends</h3>
            <p>
              Making plans with friends has never been easier. Invite your
              friends to make plans and let us do the work for you. Want to go
              it alone? No worries you can do that as well.
            </p>
          </div>
        </div>
        <div className="Step">
          <div className="step-icon">
            <img src={CardStack} alt="Card Stack" />
          </div>
          <div className="text-content">
            <h3>Select your preferences</h3>
            <p>
              Everyone you’ve invited will select their preferences through a
              fun card swipe quiz. Once everyone has completed the quiz, us work
              our magic.
            </p>
          </div>
        </div>
        <div className="Step">
          <div className="step-icon">
            <img src={heart} alt="heart" />
          </div>
          <div className="text-content">
            <h3>View your results</h3>
            <p>
              Based on everyone’s preferences, we then provide a recommendation
              where to go to eat, that everyone will enjoy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
