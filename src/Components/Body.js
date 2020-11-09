import React, { useEffect } from "react";
import Cards from "./Cards";
import axios from "axios";
import "../styles/style.css";
import { CircularProgress } from "@material-ui/core";

/**
 *
 * @param {*} props
 * The body will display list of alll beers. On click of each beer the user can see full details . T
 * The user can change view from grid to list and vice-versa
 * user can search a aprticular beer
 *
 */

function Body(props) {
  //state to maintain list of all bers and their data
  const [data, setData] = React.useState("");
  //fired on pageload
  useEffect(() => {
    axios.get("https://api.punkapi.com/v2/beers").then((res) => {
      console.log("response", res);
      setData(res.data);
    });
    return null;
  }, []);

  //if response is till not received show a loading screen
  if (data === "") {
    return (
      <div className="loading">
        <CircularProgress />
      </div>
    );
  } else if (Array.isArray(data)) {
    return (
      <div>
        <div className="body">
          <div>
            <h1>Good people drink good beer.</h1>
          </div>
          <div>
            <h3>
              If there's one thing we should be thanking the British for, it
              should be for introducing beer in India. Whether Benjamin Franklin
              said it or not, beer is indeed a proof that God loves us and wants
              us to be happy. Try thinking of anything more gratifying than a
              nice tall glass of a high-quality frothy brew on a hot scorching
              sunny day, paired with pizza on the side and a great flick on
              Netflix. We bet you can't. So after comprehensive research, we've
              curated a list of best beer brands available in India for the beer
              snob in you
            </h3>
          </div>
        </div>
        <div>
        </div>
        <div id="card-super-container">
          <Cards data={data} setData={setData}/>
        </div>
      </div>
    );
  }
}

export default Body;
