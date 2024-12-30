import React from "react";
import { useLocation } from "react-router-dom";

export default function AccessDenied(props) {
    const message = props.message;
    return (<>
        <div id="access-denied">
        <br></br>
            <img src="wrench-screwdriver-blue.svg" style={{width: '100px'}} alt="wrench screwdriver"></img>
            <h1>Access Denied</h1>
        </div>
    </>);
}