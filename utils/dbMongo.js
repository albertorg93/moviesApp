
const mongoose = require("mongoose");
const url = process.env.URL_MONGO;
console.log(url,"esta es la url de mongo")
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on("error", error => console.log(error));
db.once('open', () => console.log('DB Connected'))
module.exports = mongoose;