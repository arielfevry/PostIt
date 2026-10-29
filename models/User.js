const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
{
	name: { type: String,
		required: true,
		trim: true},
	email: { type: String,
		trim: true,
		required: true,
		unique: true,
		lowercase: true},
	password: { type: String, required: true},
	friends: [
	{
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	],

},
{ timestamps: true, collection: 'users', versionKey: false }
);

module.exports = mongoose.model('User', userSchema);
