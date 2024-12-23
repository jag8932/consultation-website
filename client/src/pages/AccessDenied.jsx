import React from "react";
import { useLocation } from "react-router-dom";

export default function AccessDenied(props) {
    const message = props.message;
    return (<>
        <div className='hero'>
          <img src="engineering_1.jpg" alt="engineering picture"></img>
        </div>
        <div id="access-denied">
        <br></br>
            <img src="wrench-screwdriver-blue.svg" style={{width: '100px'}} alt="wrench screwdriver"></img>
            <h1>Access Denied</h1>
        </div>
    </>);
}