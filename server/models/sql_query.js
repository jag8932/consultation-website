module.exports = {
    create_user_table: `CREATE TABLE IF NOT EXISTS users (ID INT AUTO_INCREMENT PRIMARY KEY, Name VARCHAR(255), Password VARCHAR(255), IsAdmin BIT)`,
    create_bookings_table: `CREATE TABLE IF NOT EXISTS bookings (
    ID INT AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(255), 
    email VARCHAR(200), 
    message VARCHAR(255), 
    booking_date Date, 
    order_placed Date)`,
    create_new_booking: `INSERT INTO bookings (name, email, message, booking_date, order_placed) VALUES (?, ?, ?, ?, ?)`,
    insert_user: `INSERT INTO users (Name, Password, IsAdmin) VALUES (?, ?, ?)`,
    select_all_users: `SELECT * FROM users`,
    select_users_equalto: `SELECT * FROM users WHERE Name = ?`,
    user_login: `SELECT * FROM users WHERE Name = ?`
    
}