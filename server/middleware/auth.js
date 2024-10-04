
const isAuthenticated =(req, res, next) => {
    if (req.session.loggedin && req.session.isAdmin) {
        return next();
    } else {
        res.status(401).send("Unauthorized user");
    }
}

module.exports = {
    isAuthenticated,
}