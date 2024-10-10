const { handle_execute } = require("./query_controller");
const { create_bookings_table, create_new_booking} = require("../models/sql_query");

const createBookingTable = async(connection, req, res) => {
    const response = await handle_execute(connection, create_bookings_table, []);
    res.json({response});
}

const createBooking = async (connection, req, res) => {
    const {name, email, message, booking_date, order_placed} = req.body;

    const values = [name, email, message, booking_date, order_placed];

    if (name && email && message && booking_date && order_placed) {

    } else {
        res.status(400).json({error: "All fields must be filled out."});
    }

}
const allBookings = async (connection, req, res) => {

}
const specificBooking = async (connection, req, res) => {

}

const deleteBooking = async (connection, req, res) => {
    
}

const updateBooking = async (connection, req, res) => {
    
}

module.exports = {
    createBookingTable,
    createBooking,
    allBookings,
    specificBooking,
    deleteBooking,
    updateBooking
}