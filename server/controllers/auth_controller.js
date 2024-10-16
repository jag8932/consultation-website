const { user_login } = require("../models/sql_query");
const { handle_execute } = require("./query_controller");
const bcrypt = require('bcrypt');

const login = async (connection,req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    if (username && password) {

       const results = await handle_execute(connection, user_login, [username]);

       if (results.length > 0) {
        const comparePassword = results[0].Password;
        const match = await bcrypt.compare(password, comparePassword);
        
        if (match) {
            req.session.loggedin = true;
            req.session.username = username;
            if (results[0].IsAdmin) {
                req.session.isAdmin = true;
            } else {
                req.session.isAdmin = false;
            }
            res.status(200).json({message: "Logged in as "+ username, user: username, loggedin: true});
        }
        else {
            res.status(401).json({error: "Incorrect username or password."});
        } 
       } else {
        res.status(401).json({error: "Incorrect username or password."});
       } 
    } else {
        res.status(401).json({error: `Failed to login.`});
    }
    
}


const logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
          return res.status(500).send('Failed to log out.');
        }
        res.clearCookie('connect.sid'); 
        res.status(200).json({message: "User logged out."});
      });
}
module.exports = {
    login, 
    logout
}