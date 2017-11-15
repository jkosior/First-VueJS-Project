/*eslint-disable indent*/
const AuthController=  require("./controllers/AuthenticationController");
const AuthControllerPolicy = require("./policies/AuthenticationControllerPolicy");


module.exports = (app) =>{
    app.get("/status", (req, res) =>{
        res.send({
            message: "hello world"
        });
    });
    app.post("/register",
        AuthControllerPolicy.register,
        AuthController.register
    );
    app.post("/login",
        AuthControllerPolicy.register,
        AuthController.login
    );
};
