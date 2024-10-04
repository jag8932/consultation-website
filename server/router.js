
const { testEmail } = require('./controllers/email_controller');
const { create_user, create_user_table } = require('./controllers/user_controller');
const { login } = require('./controllers/auth_controller');
const { isAuthenticated } = require('./middleware/auth');

const router = (app, connection) => {
    app.get('/sendEmail', isAuthenticated, (req, res) => {
        testEmail();
    });
    
    app.get("/api", (req, res) => {
        res.json({ fruits: ["bana", "pear", "apple", "lemon"]})
    });

    app.post('/createUser', (req, res) => {
        create_user(connection, req, res);
    });

    app.post('/createUserTable', (req, res) => {
        create_user_table(connection, req, res);
    });

    app.post('/login', (req, res) => {
        login(connection, req, res);
    })
}

module.exports = router;