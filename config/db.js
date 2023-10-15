const mongoose = require("mongoose")
let url = `mongodb+srv://Tushar:window@cluster0.utfi84h.mongodb.net/`

mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("connected to database successfully"))
    .catch((err) => console.log("error mongodb connection"))
