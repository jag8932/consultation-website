module.exports = {
    create_user_table: `CREATE TABLE IF NOT EXISTS users (ID INT AUTO_INCREMENT PRIMARY KEY, Name VARCHAR(255), Password VARCHAR(255), IsAdmin BIT)`,
    insert_user: `INSERT INTO users (Name, Password, IsAdmin)
                 VALUES (?, ?, ?)`,
    select_all_users: `SELECT * FROM users`,
    select_users_equalto: `SELECT * FROM users WHERE Name = ?`,
    user_login: `SELECT * FROM users WHERE Name = ?`
    
}