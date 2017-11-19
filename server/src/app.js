/*eslint-disable no-console*/
/*eslint-disable indent*/
/*eslint-disable no-unused-vars*/

const express = require("express");
const bodyParser = require("body-parser");
const {sequelize} = require("./modules");
const cors = require("cors");
const morgan = require("morgan");
const config = require("./config/config");

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

require("./routes")(app);

sequelize.sync()
    .then(() => {
        app.listen(config.port);
        console.log(`server started on port ${config.port}`);
    });
