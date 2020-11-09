import React from 'react';
import { Link } from "react-router-dom";

//Displays header for the feed with title and a Link to Dashboard page
function FeedHeader(props) {
    return (
        <div className="feed-header">
            <h1><b style={{marginLeft:"150px"}}>BEER FEED</b></h1>
            <Link to="/Dashboard" style={{textDecoration:'none'}}><div className="link"><h2>Dashboard</h2></div></Link>
        </div>

    );
}

export default FeedHeader;