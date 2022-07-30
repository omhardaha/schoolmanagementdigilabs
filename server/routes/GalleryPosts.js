const mongoose = require("mongoose");

const galleryPosts = new mongoose.Schema(
	{
		link: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("galleryPosts", galleryPosts);
