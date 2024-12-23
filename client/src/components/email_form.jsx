import { useState, useEffect } from "react";
import flatpickr from "flatpickr";

const get_date = () => {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (month < 10) {
        month = '0' + month.toString();
    }
    if (day < 10) {
        day = '0' + day.toString();
    }

    return `${year}-${month}-${day}`;
}

const get_taken_dates = async () => {
    
}
const handle_submit = () => {
    
}

export default function EmailForm () {

    const [todaysDate, setTodaysDate] = useState("");

    useEffect(()=>{
        setTodaysDate(get_date());
        flatpickr("#datePicker", {
            altInput: true,
            altFormat: "F j, Y",
            dateFormat: "Y-m-d",
            minDate: todaysDate,
        });
    }, []);

    return (<>
        <div className="form-container">
        <form id="email-form">
            <label><strong>Email <span style={{color: 'red'}}>*</span></strong></label>
            <input id="email" type="email" required></input>
            <label id="name"><strong>Name</strong><span style={{color: 'red'}}>*</span></label>
            <input id="name-field"type="text" required></input>
            <label><strong>Schedule Meeting</strong><span style={{color: 'red'}}>*</span></label>
            <input type="text" id="datePicker" placeholder="Select Date" required></input>
            <label><strong>Message</strong><span style={{color: 'red'}}>*</span></label>
            <textarea rows="10" cols="30" required></textarea>
            <button type="submit">Submit</button>
        </form>
        </div>
    </>)
}