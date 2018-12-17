var express = require('express'),
 bodyParser = require('body-parser');

   multer = require('multer');
const request=require('request');

//const upload=multer({dest:"uploads/"})
// to save data
const User=require('../Model/usermodel');
const router=express.Router();

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
router.post('/register',function(req,res,next){
	console.log(req.body);       
	if(req.body)
	{
		User.create(req.body).then(function(newuser){
			res.send({"status":true,"code":200,"message":"User Created"});
		});     
	}
	else
	{
		res.send({"status":false,"code":404,"message":"Required Data is missing"});
	}
});
module.exports=router;