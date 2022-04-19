const { sign } = require("jsonwebtoken");

const createAccessToken = (userId) => {
    return sign({ userId }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "5s",
    });
};

const createRefreshToken = (userId) => {
    return sign({userId}, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: "30m",
    });
};

const sendAccessToken = (req, res, accesstoken, role ) => {
    res.json({
        accesstoken,
        email: req.body.email,
        role,
    });
};

const sendRefreshToken = (req, res, refreshtoken) => {
    res.cookie('refreshtoken', refreshtoken, {
        domain: 'localhost',
        httpOnly: true,
        path: '/api/refresh_token',
    });
};

module.exports = {
    createAccessToken,
    createRefreshToken,
    sendAccessToken,
    sendRefreshToken,
};
