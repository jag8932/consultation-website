import { useState, useEffect } from 'react';
import Bookings from '../components/Bookings';
import Menu from '../components/menu';

export default function Admin() {
    const [contentState, setContentState] = useState("Emails");
    const [content, setContent] = useState(<div>Loading...</div>)

    useEffect(() => {
        switch(contentState) {
            case "Emails":
                setContent(<div>Emails</div>);
                console.log("Emails");
                break;
            case "Bookings":
                setContent(<div><Bookings></Bookings></div>);
                console.log("Bookings");
                break;
            default:
                setContent(<div>Loading...</div>);
                console.log("Default");
        }
    }, [contentState]);
    return (
        <>
         <div id="admin" className="container">
            <div id="admin-header" className="container-top">
                <h2>Manage Clients and Bookings</h2>
            </div>
            <div id="admin-nav" className="container-side sub-container">
                <ul>
                    <li>
                        <button className='menu-button' onClick={() => {setContentState("Emails")}}>
                            Emails
                        </button>
                    </li>
                    <li>
                        <button className='menu-button' onClick={() => {setContentState("Bookings")}}>
                            Bookings
                        </button>
                    </li>
                </ul>
            </div>
            
            <div id="admin-content" className="sub-container container-content">
                {content}
            </div>
         </div>
        </>
    )
}