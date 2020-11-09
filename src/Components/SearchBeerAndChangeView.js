import React from "react";

function SearchBeerAndChangeView(props) {
  return (
    <div className="click-search-div">
      <button
        className="change-view"
        onClick={props.changeView}
        style={{ height: "50px" }}
      >
        CHANGE VIEW
      </button>
      <div className="search-div">
        <input type="text" placeholder="search" ref={props.searchRef} />
        <button
          className="button-search"
          onClick={props.search}
          style={{ height: "50px" }}
        >
          SEARCH BEER
        </button>
      </div>
    </div>
  );
}

export default SearchBeerAndChangeView;
