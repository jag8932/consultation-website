
const isAuthenticated =(req, res, next) => {
    if (req.session.loggedin && req.session.isAdmin) {
        return next();
    } else {
        res.status(401).send("Unauthorized user");
    }
}

const restrictedCountries = async (req, res, next) => {
    const userIp = "74.71.162.93"; // Make sure variable is set to req.ip for deployment 
    const restricted = ["CN", "RU", "IR"];
    try {
        
        const response = await fetch(`https://ipinfo.io/${userIp}?token=3ec079abaf707b`);
        const data = await response.json();
        const country = data.country;

        if (restricted.includes(country)) {
            
            return res.status(403).json({isAuthorized: false, message: "Access from your region is restricted."});
        }
      
        next();
    } catch (error) {
        console.error("Geolocation API error:", error);
        res.status(500).send("Error determining location.");
    }
}
module.exports = {
    isAuthenticated,
    restrictedCountries
}