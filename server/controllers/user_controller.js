const query = require('../models/sql_query');
const bcrypt = require('bcrypt');


function handle_execute(connection, sql, values) {
    return new Promise((resolve, reject) => {
        connection.execute(sql, values, (err, results) => {
            if (err) {
                return reject(err);
            }
           resolve(results);
        });
    });
} 

const create_user_table = async(connection, req, res) => {
    const sql = query.create_user_table;

    connection.connect((err) => {
        if (err) throw err;
        connection.query(sql, (err, result) => {
            if (err) throw err;
            console.log("Table created");
            return result;
        })
    })
}

const create_user = async(connection, req, res) => {
    try {
        const {name, password} = req.body;
        const saltRounds = 10;
        const sql = query.insert_user;
        const sqlCheck = query.select_users_equalto;

        const existingUsers = await handle_execute(connection, sqlCheck, [name]);
        

        if(existingUsers.length < 1) {
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            const values = [name, hashedPassword, 1];
    
            await handle_execute(connection, sql, values);
    
            res.status(201).json({result: "User created successfully."});
        } else {
            res.status(401).json({error: `User ${name} already exists.`});
        }
    } catch (err) {
        res.status(500).json({error: "Failed to create user."});
    }
}

module.exports = {
    create_user,
    create_user_table,
}