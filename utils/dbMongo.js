// const mongoose = require("mongoose");

// //const DATABASE_URL = "mongodb://localhost:27017/fakeshop";
// mongoose.connect("mongodb://localhost:27017/misPelis", { useNewUrlParser: true, useUnifiedTopology: true});
// const db = mongoose.connection;

// // Eventos
// db.on("error", error => console.log(error));
// db.once("open", () => console.log("connection to db established"));

// module.exports = mongoose;

const mongoose = require("mongoose");
const url = process.env.URL_MONGO;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on("error", error => console.log(error));
db.once('open', () => console.log('DB Connected'))
module.exports = mongoose;