import React from "react";
import axios from "axios";
import Post from "./Post";
import FeedHeader from "./FeedHeader";
import { CircularProgress } from "@material-ui/core";

/**
 * This will display new post in the feed every 5 sec usingan api that fetches any random beer
 * For each index in the data array we will display it as a separate post
 *
 */

function Feed(props) {
  //state to mainatain array having json response of each api call
  const [data, setData] = React.useState([]);
  //this will call random api every 5 sec and update the state data accordingly
  React.useEffect(() => {
    const interval = setInterval(() => {
      axios.get("https://api.punkapi.com/v2/beers/random").then((res) => {
        console.log("response", res);
        let json = data;
        json.push(res);
        console.log("data", data);
        setData([...json]);
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [data]);
if(Array.isArray(data) && data.length===0){
    return (
        <div style={{ display: "grid" }}>
          <FeedHeader />
          {/* <div> */}
            {/* <div className="feed">
              {data.map((value, index) => {
                console.log("value", value.data[0].name);
                return <Post data={value.data[0]} />;
              })}
            </div> */}
            <div className="loading">
                  <CircularProgress />
                  <h2>Loading Your Feeds</h2>   
              </div>
          {/* </div> */}
        </div>
      );
}
else{
  return (
    <div style={{ display: "grid" }}>
      <FeedHeader />
      <div>
        <div className="feed">
          {data.map((value, index) => {
            console.log("value", value.data[0].name);
            return <Post data={value.data[0]} />;
          })}
        </div>
      </div>
    </div>
  );
        }
}

export default Feed;
