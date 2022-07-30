const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
		},
		number: {
			type: String,
		},
		message: {
			type: String,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("contactUseModel", userSchema);
