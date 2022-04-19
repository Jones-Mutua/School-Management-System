const mysql = require("mysql2");
const { jwt, verify } = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Users = require("../models/users")
const {
    createAccessToken,
    createRefreshToken,
    sendAccessToken,
    sendRefreshToken,
} = require('../middlewares/tokens')

exports.getAllUsers = async (req, res) => {
    try {
        const users = await Users.findAll({});
        res.status(200).json(users);
    } catch (error) {
        res.send(error);
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({
                message: "Please provide an email and password",
            });
            return;
        }

        try {
            const user = await Users.findOne({ where: { User_Email: email } });
            if (!user) throw new Error("User does not exist.");

            const accesstoken = createAccessToken(user.Users_Id);
            const refreshtoken = createRefreshToken(user.Users_Id);

            await Users.update(
                { User_Token: refreshtoken },
                { where: { User_Email: email } }
            );
            console.log(user);

            sendRefreshToken(req, res, refreshtoken);
            sendAccessToken(req, res, accesstoken, user.User_Role );
            //console.log(req.cookies);
            
            
        } catch (err) {
            res.send({
                error: `${err.message}`,
            });
        }        

    } catch (err) {
        res.send({
            error: `${err.message}`,
        });
    }
};

exports.refreshtoken = async (req, res) => {
    const token = req.cookies.refreshtoken;
    console.log(token);
    

    if (!token) return res.send("No refreshtoken");

    let payload = null;
    try {
        payload = verify(token, process.env.REFRESH_TOKEN_SECRET);
    } catch (err) {
        return res.send("Invalid token");
    }
    console.log(payload);
    

    const user = await Users.findOne({ where: { Users_Id: payload.userId}});

    if (!user) {
        return res.send("User not found!");
    }
    if (user.User_Token !== token) {
        return res.send("Invalid token...");
    }
    const accesstoken = createAccessToken(user.Users_Id);
    const refreshtoken = createRefreshToken(user.Users_Id);
    await Users.update(
        { User_Token: refreshtoken },
        { where: { User_Email: user.User_Email } } 
    );

    sendRefreshToken(req, res, refreshtoken);
    return res.send({ accesstoken, refreshtoken });

};

exports.logout = async (req, res) => {
    res.clearCookie('refreshtoken', { path: '/refresh_token' });
    return res.send({
        message: 'Logged out'
    })
}