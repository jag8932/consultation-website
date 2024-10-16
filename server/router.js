
const { testEmail } = require('./controllers/email_controller');
const { create_user, create_user_table } = require('./controllers/user_controller');
const { login, logout } = require('./controllers/auth_controller');
const { createBookingTable, createBooking, allBookings, specificBooking, deleteBooking, updateBooking} = require('./controllers/booking_controller');

const { isAuthenticated } = require('./middleware/auth');


const router = (app, connection) => {

    // Test endpoints 
    app.get("/api", (req, res) => {
        res.json({ fruits: ["bana", "pear", "apple", "lemon"]})
    });

    // User
    app.post('/createUser', (req, res) => {
        create_user(connection, req, res);
    });

    app.post('/createUserTable', (req, res) => {
        create_user_table(connection, req, res);
    });

    app.post('/login', (req, res) => {
        login(connection, req, res);
    });

    app.post('/logout', (req, res) => {
        logout(req, res);
    });

    // Admin 

    app.get('/sendEmail', isAuthenticated, (req, res) => {
        testEmail();
    });

    app.get('/createBookingTable', isAuthenticated, (req, res) => {
        createBookingTable(connection, req, res);
    });

    app.get('/bookings', (req, res) => {
        allBookings(connection, req, res);
    });

    app.post('/createBooking', isAuthenticated, (req, res) => {
        createBooking(connection, req, res);
    });

    app.post('/updateBooking', isAuthenticated, (req, res) => {
        updateBooking(connection, req, res);
    });

    app.delete('/removeBooking', isAuthenticated, (req, res) => {
        deleteBooking(connection, req, res);
    });
}

module.exports = router;