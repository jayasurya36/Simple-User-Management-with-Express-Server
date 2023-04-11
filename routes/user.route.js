const router = require('express').Router();
const User = require('../models/User.model');

router.post('/' , async(req , res)=>{
    try{
        const user = new User(req.body);
        await user.save();
        res.status(200).send({"status" : "Success"})
    }catch(err){
        res.status(500).send({ "status" : "Failed"  ,"err" : err.message})
    }
})
router.get('/form' , async(req , res) =>{
    try{
        res.render('../views/form.ejs');
    }catch(err){
        res.send(err.message)
    }
})
router.get('/' , async(req , res)=>{
    try{
        const user = await User.find();
        res.render('../views/userpage.ejs' , {userData : user});
    }catch(err){
        res.status(500).send({ "status" : "Failed"  ,"err" : err.message})
    }
})

router.put('/:id' , async(req , res) =>{
    try{
        await User.findByIdAndUpdate(req.params.id , req.body);
        res.send({"status" : "Success"})
    }catch(err){
        res.status(500).send({ "status" : "Failed"  ,"err" : err.message})
    }
})

router.delete('/:id' , async(req , res) =>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.send({"status" : "Success"});
    }catch(err){
        res.status(500).send({ "status" : "Failed"  ,"err" : err.message})
    }
})

module.exports = router