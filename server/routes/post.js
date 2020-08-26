const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin = require('../middleware/requireLogin')
const Post = mongoose.model('Post')
const path = require('path')
/*const multer = require('multer')
var Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/')
    },
    filename: (req, file, cb) => {
        cb(null,file.fieldname +'_'+Date.now()+path.extname(file.originalname));
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.mp4') {
            return cb(res.status(400).end('only jpg, png, mp4 is allowed'), false);
        }
        cb(null, true)
    }
});
*/
//var uploads = multer({ storage: Storage });

router.get('/allpost',(req,res)=>{
	populate("postedBy","_id name")
	.then(posts=>{
		res.json({posts})
	})
	.catch(err=>{
		console.log(err)
	})
})
router.post("/createpost",requireLogin,(req,res)=>{
	//const photo = req.file
	//console.log(photo)
	const {title,body,pic} = req.body
	console.log(title,body)
	if(!title || !body || !pic){
		return res.status(422).json({error:"plase add all the fields"})
	}
	 req.user.password = undefined
	const post = new Post({
		title,
		body,
		//photo:req.file.path,
		photo:pic,
		postedBy:req.user
	})
	post.save().then(result=>{
		res.json({post:result})
	})
	.catch(err=>{
		console.log(err)
	})
})

router.get('/mypost',requireLogin,(req,res)=>{
	Post.find({postedBy:req.user._id})
	populate('postedBy','_id name')
	.then(mypost=>{
		res.json({mypost})
	})
	.catch(err=>{
		console.log(err)
	})
})

module.exports = router