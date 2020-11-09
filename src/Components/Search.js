import React from 'react'
import axios from 'axios'

function Search(props) {
    const searchRef = React.useRef(null);
     const search = () => {
        console.log("ref", searchRef.current);
        axios
          .get(
            `https://api.punkapi.com/v2/beers?beer_name=${searchRef.current.value}`
          )
          .then((res) => {
            console.log("response", res);
            props.setData()
          });
      };
    return (
    <div>
        <input type="text" placeholder="search" ref={searchRef} />
        <button onClick={search} style={{ width: "40px", height: "20px" }} />
    </div>
    );
}

export default Search;