const express = require("express");
const app = express();
const colors = require('colors');
const port = 3000;

const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

require('./config/db');

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

const courseRoutes = require("./routes/courseRoutes");
app.use('/course', courseRoutes)

app.listen(port, () => console.log(`app running on port ${port}`.red.bold));