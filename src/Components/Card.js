import React from "react";
import "../styles/style.css";
import { Link } from "react-router-dom";

/**
 *
 * @param {json} props
 * json contains name,description,ph level,tagline image etc about the particular beer
 * We will diplay all of it inside a Card
 * onClink of the Tag using <Link> we will redirect them to BeerDetails page by passing props.
 */

function Card(props) {
  // console.log("data", props);
  console.log("view", props.view);
  if (props.stringVal.content !== null) {
    return (
      <div className="card-list">
        {/* By clicking on any item inside <Link> tag will redirect to /BeerDetails route with props passed in aboutprops */}
        <Link
          to={{
            pathname: "/BeerDetails",
            aboutprops: {
              name: `${props.stringVal.name}`,
              tagline: `${props.stringVal.tagline}`,
              description: `${props.stringVal.description}`,
              image_url: `${props.stringVal.image_url}`,
              abv: `${props.stringVal.abv}`,
              ibu: `${props.stringVal.ibu}`,
              ph: `${props.stringVal.ph}`,
              ingredients: `${props.stringVal.ingredients}`,
              unit: `${props.stringVal.volume.unit}`,
              value: `${props.stringVal.volume.value}`,
              food_pairing: `${props.stringVal.food_pairing}`,
              brewers_tips: `${props.stringVal.brewers_tips}`,
            },
          }}
          style={{
            textDecoration: "none", //to not highlight the tags inside Link tag
          }}
        >
          <h1>{props.stringVal.name}</h1>
          <div className="section">
            <img
              src={props.stringVal.image_url}
              alt="unable to load"
              style={{ width: "100px", height: "300px" }}
            />
            <h2>{props.stringVal.description}</h2>
          </div>
        </Link>
      </div>
    );
  }
}

export default Card;
