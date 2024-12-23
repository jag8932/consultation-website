import { useEffect, useState } from "react"

export default function Bookings() {
    const [bookings, setBookings] = useState([]);

    /*
    useEffect(()=> {
        fetch("/bookings").then(response => response.json).then((data) => {
            console.log(data);
            setBookings(data);
        });
    }, []); */

    useEffect(()=> {
        setBookings([

        ]);
    },[]);
    return (
        <>
        <div id="bookings" className="column-container">
            {bookings.length == 0 ?
            <h3>No bookings to display.</h3> :
            bookings.map((booking, index) => (
             <div className="booking-item" id={"booking_" +index} key={index} value={booking.id}>
             <p className="booking-text">{booking.name}</p>
             <p>{booking.date}</p>
            </div>
            ))}
        </div>
        </>
    )
}