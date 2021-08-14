// MODULES IMPORT
var express = require("express");
var connect_db = require("./config/database.js");

var app = express();

const port = process.env.PORT || 3000;

//========================== DATABASE CONNECTION ======================
connect_db();

//========================== ROUTES DEFINITION ========================
app.get("/", (req, res) => {
	res.send("API Running");
});

app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/posts', require('./routes/api/posts'))
app.use('/api/profiles', require('./routes/api/profiles'))

//=========================== SERVER LISTENER =========================
const server = app.listen(port, () => {
	console.log("http://localhost:3000");
});
