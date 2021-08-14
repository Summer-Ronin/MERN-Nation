const mongoose = require("mongoose");
const config = require("config");
const db_uri = config.get("mongo_uri");

const connect_db = async () => {
	try {
		await mongoose.connect(db_uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log("MongoDB connected ");
	} catch (error) {
		console.error(error.message);

		// Exit process with failure
		process.exit(1);
	}
};

module.exports = connect_db;
