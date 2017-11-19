const {User} = require("../modules");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

function jwtSignUser (user) {
    const ONE_WEEK = 60 *60 *24 *7;
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    });
};

module.exports = {
    /* register method */
    async register(req, res){
        console.log(req.body)
        console.log(User.create)
        try{
            const user = await User.create(req.body);
            const userJson = user.toJSON();

            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            });
        }catch(err){
            res.status(400).send({
                error: "This email is already in use."
            });
        }
    },

    /* login method */
    async login(req, res){
        try{
            const{email, password} = req.body;

            const user = await User.findOne({
                where: {
                    email: email,
                    password: password
                }
            });

            if(!user){
                return res.send(403).send({
                    error: "The login information was incorrect"
                });
            }

            const isPasswordValid = await User.comparePassword(user.password);

            if(!isPasswordValid) {
                return res.send(403).send({
                    error: "The login information was incorrect"
                });
            }

            const userJson = user.toJSON();

            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            });

        }catch(err){
            res.status(500).send({
                error: "An error has occured trying to log in."
            });
        }
    }
};
