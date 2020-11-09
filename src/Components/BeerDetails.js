import React from "react";
/**
 *
 * @param {json} props
 * json contains all data coming from Card or CardGrid that contains info about the beer.
 * We will use the props and display it accordingly
 */
function BeerDetails(props) {
  console.log("details about the beer", props.location.aboutprops.food_pairing);
  return (
    <div>
      <div className="name">
        <h1>{props.location.aboutprops.name}</h1>
      </div>
      <div className="about">
        <div>
          <img
            src={props.location.aboutprops.image_url}
            style={{ width: "100px", height: "500px" }}
          />
          <h2>{props.location.aboutprops.tagline}</h2>
        </div>
        <div className="text">
          <h1>
            <b>DESCRIPTION:</b>
          </h1>

          <p>{props.location.aboutprops.description}</p>

          <h5>ABV : {props.location.aboutprops.abv}</h5>
          <h5>PH : {props.location.aboutprops.ph}</h5>
          <h5>IBU : {props.location.aboutprops.ibu}</h5>
          <h5>
            VOLUME :{props.location.aboutprops.value}
            {props.location.aboutprops.unit}
          </h5>
          <p>
            <b>PAIRED WITH:</b>
            {props.location.aboutprops.food_pairing}
          </p>
        </div>
      </div>
      <div className="tip">
        <h1>TIPS:</h1>

        <p>{props.location.aboutprops.brewers_tips}</p>
      </div>
    </div>
  );
}

export default BeerDetails;
