const express = require('express');
const router=express.Router();
const Model = require('../Models/UserModel');

router.get('/',(req,res)=>{
    console.log("Inside Default Router");
    
})

router.post('/add',(req,res)=>{
    console.log(req.body);

    new Model(req.body).save()
    .then((result)=>{
        res.status(200).json(result);  
    }).catch((err)=>{
        console.log(err);        
    });
    
});

router.get('/getData',(req,res)=>{

    Model.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});




module.exports=router;