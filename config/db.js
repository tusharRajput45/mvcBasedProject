const mongoose = require("mongoose")
let url = `mongodb+srv://dbuser:windows@cluster0.1dt0s.mongodb.net/assignment`

mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("connected to database successfully"))
    .catch((err) => console.log("error on mongodb connection"))
