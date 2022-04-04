import SectionImage from "../assets/SectionImage.png";
import Instagram from "../assets/Instagram.svg";
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
        <h2> Simple as 1, 2, 3</h2>
        <div className="Step">
          <div className="Icon">
            <img src={Instagram} alt="instagram" />
          </div>
          <div className="text-content">
            <h3>The first Step</h3>
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
            <h3>The second Step</h3>
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
            <h3>The third Step</h3>
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
