const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

/**
 * @route POST api/users
 * @desc register new user
 * @access Public
 */
router.post(
	"/",
	[
		check("name", "Name is required").not().isEmpty(),
		check("email", "Please enter email").isEmail(),
		check(
			"password",
			"Please enter a password with 6 or more characters"
		).isLength({ min: 6 }),
	],
	(req, res) => {
		const validator_errors = validationResult(req);

		// check out errors
		if (!validator_errors.isEmpty()) {
			return res.status(400).json({ errors: validator_errors.array() });
		}
	}
);

module.exports = router;
