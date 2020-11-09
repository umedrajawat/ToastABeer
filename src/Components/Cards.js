import React from "react";
import Card from "./Card";
import CardGrid from "./CardGrid";
import axios from "axios";
import SearchBeerAndChangeView from "./SearchBeerAndChangeView";

/**
 *
 * @param {Array} props
 * props is an array of jsons in which each json contains details about the beer
 *
 */

function Cards(props) {
  //onclick of button we change view from grid to list
  const [view, setView] = React.useState("grid");

  const searchRef = React.useRef(null); //refers to input search field

  //function to change view
  const changeView = () => {
    console.log("curent view", view);
    if (view === "grid") {
      setView("list");
      console.log("new view", view);
    } else {
      setView("grid");
      console.log("new view", view);
    }
  };

  /**
   * This function will take value from search box and do an axios call to get the searched value beer data and display it .
   */
  const search = () => {
    console.log("ref", searchRef.current);
    axios
      .get(
        `https://api.punkapi.com/v2/beers?beer_name=${searchRef.current.value}`
      )
      .then((res) => {
        console.log("response", res);
        let arr = [];
        arr.push(res.data[0]);
        props.setData([...arr]);
      });
  };

  if (view === "grid") {
    console.log("inside grid");
    return (
      <div style={{ display: "grid" }}>
        <SearchBeerAndChangeView
          view={view}
          changeView={changeView}
          searchRef={searchRef}
          search={search}
        />
        <div id="cards-grid-container">
          {props.data.map((value, index) => {
            console.log("value", value);
            return <CardGrid stringVal={value} />;
          })}
        </div>
      </div>
    );
  } else {
    console.log("list view");
    return (
      <div>
        <SearchBeerAndChangeView
          view={view}
          changeView={changeView}
          searchRef={searchRef}
          search={search}
        />
        <div id="cards-list-container">
          {props.data.map((value, index) => {
            console.log("value", value);
            return <Card stringVal={value} view={view} />;
          })}
        </div>
      </div>
    );
  }
}

export default Cards;
