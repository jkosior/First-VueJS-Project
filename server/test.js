const fs = require("fs");
const path = require("path");

var nef = fs.readdirSync(path.join(__dirname))
// nef.forEach(file=>console.log(file))
    // .filter((file) => {
        // file === "index.js"
    // })
    // .forEach(file => {
        // console.log("dupa")
        // const model = sequelize.import(path.join(__dirname, file));
        // db[model.name] = model;
    // });
