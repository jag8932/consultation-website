const express = require('express');
const app = express();
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const router = require('./router');
const redis = require('redis');

require('dotenv').config();

const dbPassword = process.env.DB_PASSWORD;
const dbUser = process.env.DB_USER;

const PORT = process.env.PORT || 3000;
const REDIS_PORT = process.env.REDIS_PORT || 5000;

const connection = mysql.createConnection({
    host: "localhost",
    user: dbUser,
    password: dbPassword,
    database: "client_emails"
});

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204
}
/*
connection.connect((err)=> {
    if (err) throw err;
    console.log("Connected to local mysql database");
    connection.query(sqlQuery, (err, result) => {
        if (err) throw err;
        console.log("Result: " + result);
    })
}); */

/*
const redisClient = redis.createClient({
    host: 'localhost',
    port: REDIS_PORT
});

redisClient.on('error', (err)=> {
    console.log("Could not establish a connection with redis. " + err);
});
*/
app.use(express.json());
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());


router(app, connection);

app.listen(PORT, ()=> {
    console.log(`Server started on port ${PORT}`);
});

