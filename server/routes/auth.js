const router = require("express").Router();
const ContactUsModel = require("./ContactUsModel");
const GalleryPosts = require("./GalleryPosts");

router.get("/", async (req, res) => {
	try {
		console.log(req.body);
		const newContact = await ContactUsModel.find();
		res.status(200).json(newContact);
	} catch (error) {
		res.status(500).json(error);
	}
});
router.post("/", async (req, res) => {
	try {
		console.log(req.body);
		const newContact = new ContactUsModel(req.body);
		const message = await newContact.save();
		res.status(200).json(message);
	} catch (error) {
		res.status(500).json(error);
	}
});


module.exports = router;
