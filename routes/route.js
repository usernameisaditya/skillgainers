const express = require('express');
const router = express.Router();
const User = require('../models/user')
router.use(express.json())
router.use(express.urlencoded({ extended: false }));

router.get('/',async (req,res)=>{
    try {
        res.render('landingpage')
    } catch (error) {
        res.send(error.message)
    }
})
router.post('/',async (req,res)=>{
    try {
        const {name,email} = await req.body
    const finduser = await User.findOne({email})
    if(!finduser){
        const user = await User.create({name,email})
        res.send(user)
        console.log(user)
    }else{
        res.send(finduser)
        console.log(finduser)
    }
    } catch (error) {
        res.send(error.message)
    }
})

module.exports = router