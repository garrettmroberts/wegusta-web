import SectionImage from "./SectionImage.png";
import Instagram from "./Instagram.svg";
import "./SectionOne.scss";

function SectionOne() {
  return (
    <div className="SectionOne">
      <img
        src={SectionImage}
        className="SectionOneImage"
        alt="SectionOne Image"
      />
      <div className="SectionOneLeftContent">
        <h1> Simple as 1, 2, 3</h1>
        <div className="Step">
          <div className="Icon">
            <img src={Instagram} alt="instagram" />
          </div>
          <div className="text-content">
            <h2>The first Step</h2>
            <p>
              The first app to reccomend a restaurant based on everyones
              preferences. We’ve made dinner plans decisions easy and fun. Try
              our app today.
            </p>
          </div>
        </div>
        <div className="Step">
          <div className="Icon">
            <img src={Instagram} alt="instagram" />
          </div>
          <div className="text-content">
            <h2>The second Step</h2>
            <p>
              The first app to reccomend a restaurant based on everyones
              preferences. We’ve made dinner plans decisions easy and fun. Try
              our app today.
            </p>
          </div>
        </div>
        <div className="Step">
          <div className="Icon">
            <img src={Instagram} alt="instagram" />
          </div>
          <div className="text-content">
            <h2>The third Step</h2>
            <p>
              The first app to reccomend a restaurant based on everyones
              preferences. We’ve made dinner plans decisions easy and fun. Try
              our app today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
