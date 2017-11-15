const Promise = require("bluebird");
const bcrypt = Promise.promisifyAll(require("bcrypt-nodejs"));

const hashPassword = (user, options) =>{
    const SATL_FACTOR = 8;

    if(!user.changed("password")){
        return;
    }

    return bcrypt
        .genSaltAsync(bcrypt)
        .then(salt => bcrypt.hashAsync(user.password, salt, null))
        .then(hash => {
            user.serDataValue("password", hash)
        })
};

module.exports = (sequelize, DataTypes) =>{
    const User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    },{
        hooks: {
            beforeCreate: hashPassword,
            beforeUpdate: hashPassword,
            beforeSave: hashPassword
        }
    });

    User.prototype.comparePassword = (password) =>{
        return bcrypt.compareAsync(password, this.password);
    };

    return User
};
