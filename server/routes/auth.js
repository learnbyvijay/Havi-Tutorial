const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model('User')
const bcrypt = require('bcryptjs')
const jwt  = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')
const requireLogin = require('../middleware/requireLogin')
router.get('/',(req,res)=>{
	res.send("hello")
})
router.get('/protected',requireLogin,(req,res)=>{
	res.send("hello User")
})



router.post('/signup',(req,res)=>{
	const {name,email,password,cpassword,city} = req.body
	if(!email || !password || !name || !cpassword || !city){
		return res.status(422).json({error:"please add all fields"})
	}
	User.findOne({email:email})
	.then((savedUser)=>{
		if(savedUser){
			return res.status(422).json({error:"User is already exists with that email"})
		}
		bcrypt.hash(password,12)
		.then(hashedpassword=>{
			const user = new User({
			name,
			email,
			cpassword,
			city,
			password:hashedpassword
			})
			user.save()
			.then(user=>{
				 res.json({message:"sucessfuly save"})
			})
			.catch(err=>{
				console.log(err)
			})
		})
		
	})
	.catch(err=>{
		console.log(err)
	})


})

router.post('/signin',(req,res)=>{
	const {email,password} =req.body
	if(!email ||!password){
		return res.status(422).json({error:"please add email or password"})
	}
	User.findOne({email:email})
	.then((savedUser)=>{
		if(!savedUser){
			return res.status(422).json({error:"Invalid email or password"})
		}
		bcrypt.compare(password,savedUser.password)
		.then(doMatch=>{
			if(doMatch){
				//res.json({message:"succesful signed in"})
				const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
				const {_id,name,email} =savedUser
				res.json({token,user:{_id,name,email}})
			}
			else{
				return res.status(422).json({error:"invalid email or password"})
			}
		})
		.catch(err=>{
			console.log(err)
		})

	})
})



module.exports =router