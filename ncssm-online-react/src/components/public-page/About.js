import React from "react";
import "../../styles/about.css";
// import Hog_farm_about from "..\..\..\public\Hog_farm_about.png"
/**
 * Is the main HomePage and shows related information
 * @param {userList, locationList} props
 */
class About extends React.Component {
  render() {
    return (
      <div className="About">
        <div className="container">

            <div className="column">
                <div  className="explainer">
                    <p> Why Eastern NC? </p>
                </div>
                <div className="title2a left-align">
                    <p> 
                    Eastern NC (ENC) is one of the country's largest producers of pork. It’s also one of the most underfunded areas in the state, as it has few major cities, and is also prone to flooding. The prevalence of hog farms in these areas can lead to health complications, water contamination, and even air quality issues.  ENC is also a prevalent area for environmental justice work. 
                    </p>
                </div>
                <div  className="explainer">
                    <p> What is Environmental Justice? </p>
                </div>
                <div className="title2a left-align">
                    <p>
Environmental justice isn’t a new concept but it’s only somewhat recently come into full focus. Environmental justice is the acknowledgement that marginalized communities are relegated to areas that have worse environmental consequences and issues. For example, a lot of low income communities and communities of colour are situated next to factories, mines, and in areas prone to flooding. This is something similar to a modern day “redlining” of black and low income neighborhoods in cities (redlining is still a current issue as well though). 
</p><p>
Environmental justice is the work being done to help remedy these wrongs, and to get more say for people in their own communities. This work is largely done by grassroots and local organizations. 
</p>
                </div>
                <div className ="explainer">
               <p>What do Hog Farms have to do with anything?</p>
                </div>
                <div className = "title2a left-align">
                    <p>Hog farms, also known as Concentrated Animal Feeding Operations or CAFOs, are major producers of fecal matter. At hog farms this waste is collected in pools known as hog lagoons. 
The fecal matter in these lagoons is often contaminated with medication, bacteria, and diseases due to the diets and lifestyles of hogs at these facilities. When it rains often these lagoons will overflow causing the contamination of environments with these pathogens negatively impacting the communities nearby. 
</p><p>
It is also common practice at these places to get rid of the feces by using them as fertilizer in farm fields, however the same issue results with contamination, despite the feces being nutrient rich. Runoff from rain is also an issue, as overspraying fields is common before rainstorms to keep lagoons from overflowing, but this causes more excess nutrients in the system, which when run through watersheds, can cause algae blooms that result in a process called eutrophication, in which the aquatic environment is completely deprived of oxygen. 
</p>
<img src="/Hog_farm_about.png" alt="Hog Farm" /> 
                </div>
                <div className="creditText">
                    <p>Image credit to NC State Univerity</p>
                </div>
            </div>
        </div>
        <br />
      </div>
    );
  }
}

export default About;