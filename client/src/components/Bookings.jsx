import { useEffect, useState } from "react"

export default function Bookings() {
    const [bookings, setBookings] = useState([]);
    useEffect(()=> {
        fetch("/bookings").then(response => response.json).then((data) => {
            console.log(data);
            setBookings(data);
        });
    }, [])
    return (
        <>
        <div id="bookings" className="row-container">
            {bookings.forEach((booking, index) => {

            })}
        </div>
        </>
    )
}