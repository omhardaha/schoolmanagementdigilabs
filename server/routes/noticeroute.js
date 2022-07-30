const router = require("express").Router();
const noticeSchema = require("./Notice");

router.post("/", async (req, res) => {
	try {
		console.log(req.body);
		const newContact = new noticeSchema(req.body);
		const message = await newContact.save();
		res.status(200).json(message);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.get("/", async (req, res) => {
	try {
		const posts = await noticeSchema.find();
		res.status(200).json(posts);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.delete("/:_id", async (req, res) => {
	console.log(req.body.id);
	try {
		const posts = await noticeSchema.findByIdAndDelete(req.params._id);
		res.status(200).json(posts);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.put("/:id", async (req, res) => {
	try {
		const updatedProduct = await noticeSchema.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true }
		);
		res.status(200).json(updatedProduct);
	} catch (error) {
		res.status(500).json("m");
	}
});

module.exports = router;
