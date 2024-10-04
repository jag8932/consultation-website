import { useState, useEffect } from "react";

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
    const messageLabel = 'Message \(Optional)\ ';
    const [todaysDate, setTodaysDate] = useState("");

    useEffect(()=>{
        setTodaysDate(get_date());
    }, []);
    
    console.log(todaysDate);
    return (<>
        <div className="form-container">
        <form id="email-form">
            <label><strong>Email <span style={{color: 'red'}}>*</span></strong></label>
            <input id="email" type="email"></input>
            <label id="name"><strong>Name</strong></label>
            <input id="name-field"type="text"></input>
            <label><strong>Schedule Meeting</strong></label>
            <input id="date" type="date" name="schedule-meeting"
             min={todaysDate}
            />
            <label><strong>{messageLabel}</strong></label>
            <textarea rows="10" cols="30"></textarea>
            <button type="submit">Submit</button>
        </form>
        </div>
    </>)
}