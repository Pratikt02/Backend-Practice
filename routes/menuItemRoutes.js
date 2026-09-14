const express=require('express');
const router=express.Router();
const MenuItem=require('../models/MenuItem');



//POST rout to add MenuItem
router.post('/',async(req,res)=>{
    try{
    const data=req.body;

    const newMenuItem=new MenuItem(data);

    const response=await newMenuItem.save();
    console.log('Data Saved');
    res.status(200).json(response);
}catch(err){
    console.log(err);
    res.status(500).json({Error:'Internal Server Error'});
}
})


//get Method to MenuItem
router.get('/',async(req,res)=>{
    try{
        const data=await MenuItem.find();
        console.log('Data Fetch');
        res.status(200).json(data);

    }catch(err){
        console.log(err);
        res.status(500).json({Error:'Internal Server Error'});
    }
    
})


router.get('/:tasteType',async(req,res)=>{
    try{
        const tasteType=req.params.tasteType;
        if(tasteType=='spicy'||tasteType=='sweet'||tasteType=='sour'){
            const response=await MenuItem.find({taste:tasteType});
            console.log('response Fetched');
            res.status(200).json(response);
        }
        else{
            res.status(404).json({Error:'Invalid Taste Type'});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({Error:"Internal Server Error"});
    }
})



module.exports=router;