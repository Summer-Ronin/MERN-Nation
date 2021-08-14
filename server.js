// MODULES IMPORT
var express = require("express");
var app = express();

const port = process.env.PORT || 3000;

// Index page serving
app.get("/", (req, res) => {
	res.send('API Running')
});

//=========================== SERVER LISTENER =========================
const server = app.listen(port, () => {
    console.log('http://localhost:3000')
})

