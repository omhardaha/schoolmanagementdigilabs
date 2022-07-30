const router = require("express").Router();
const GalleryPosts = require("./GalleryPosts");

router.post("/", async (req, res) => {
	try {
		console.log(req.body);
		const newContact = new GalleryPosts(req.body);
		const message = await newContact.save();
		res.status(200).json(message);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.get("/", async (req, res) => {
    console.log("enter");
	try {

		const posts =await GalleryPosts.find();
		res.status(200).json(posts);
	} catch (error) {
        console.log(error);
		res.status(500).json(error);
	}
});

router.delete("/", async (req, res) => {
	try {
		const posts =await GalleryPosts.findOneAndDelete(req.body);
		res.status(200).json(posts);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
