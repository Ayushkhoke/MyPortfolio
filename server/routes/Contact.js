const express=require('express');
const router=express.Router();

const{contactUs}=require("../controller/contact")

router.post("/contactme",contactUs);


module.exports=router;