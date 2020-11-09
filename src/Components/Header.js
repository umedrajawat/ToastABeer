import React from 'react';
import { Link } from "react-router-dom";
/**
 * 
 * @param {*} props 
 * This will display the header with the content as "TOAST A BEER"
 */

function Header(props) {
    return (
        <div id="header">
            <h2>TOAST A BEER</h2>
            <Link to="/" style={{textDecoration:'none'}}><div className="go-to-feed"><h2>BEER FEED</h2></div></Link>
            
        </div>
    );
}

export default Header;