import React from "react";
import "../../styles/credits.css";
/**
 * Is the main HomePage and shows related information
 * @param {userList, locationList} props
 */
class Credits extends React.Component {
  render() {
    return (
      <div className="Credits">
        <div className="container">
            <div className="comingc">
                <iframe src="https://storymaps.arcgis.com/stories/b6bae48907f14e29922c24314367240a" width="100%" height="500px" frameborder="0" allowfullscreen allow="geolocation"></iframe>
            </div>
        </div>
        <br />
      </div>
    );
  }
}

export default Credits;
