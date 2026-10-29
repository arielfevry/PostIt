const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
{
	boardId: 
	{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Board",
		required: true,
	},
	userId:
	{
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	type:
	{
		type: String,
		trim: true,
		enum: ["text", "image", "checklist", "link", "sticker"],
	},
	content:
	{
		type: mongoose.Schema.Types.Mixed, //allows storage of any type of data
		required: true,
	}

},
{ collection: 'items', versionKey: false, timestamps: true}


);

module.exports = mongoose.model("Item", itemSchema);
