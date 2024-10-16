import { useState, useEffect } from 'react';
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
                setContent(<div>Bookings</div>);
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
            <div id="admin-nav">
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
            
            <div id="admin-content" className="sub-container">
                {content}
            </div>
         </div>
        </>
    )
}