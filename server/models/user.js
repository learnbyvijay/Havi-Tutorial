const mongoose =require('mongoose')

const userSchema = new mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true
	},
	password:{
		type:String,
		required:true
	},
	cpassword:{
		type:String,
		required:true
	},
	city:{
		type:String,
		required:true
	}
})
mongoose.model("User",userSchema)