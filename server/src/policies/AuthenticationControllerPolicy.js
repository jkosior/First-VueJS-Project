const Joi = require('joi');

module.exports = {
    register(req, res, next){
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-z-A-Z0-9\!\@\#\$\%\^\*\&\(\)\_\-]{8.32}$');
            )
        };

        const {error, value} = Joi.validate(req.body, schema);
        if(error){
            switch(error.details[0].context.key){
                case 'email':
                    res.status(400).send({
                        message: "Please provide valid email address"
                    });
                    break;
                case 'password':
                    res.status(400).send({
                        message: `The password provided failed to match the following rules;
                        <br>
                        1. It must contain ONLY the following characters : lower case, uppsercase, 0-9,  ! @ # $ % ^ * & ( ) _ -.
                        2. It must be 8 to 32 characters long.`
                    });
                    break;
                default:
            }
        }else{
            next()
        }
    };
};
