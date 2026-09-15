const express=require('express');
const router=express.Router();
const person=require('./../models/person');

//POSt route to add a person
router.post('/',async(req,res)=>{
    try{
    const data=req.body    //Assume the request body contains the person data

    //create a new person documnt using the mongoose model
    const newPerson=new person(data);

    //save the new person to the database
      const response=await newPerson.save();
      console.log('data saved');
      res.status(200).json(response);   
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
    })


//get method to the person

router.get('/',async(req,res)=>{
    try{
        const data=await person.find();
        console.log('data Fetch');
        res.status(200).json(data);

    }catch(err){
        console.log(err);
        res.status(500).json({error:"Internal Server Error"});

    }
})



//person parameterized API call
router.get('/:workType',async(req,res)=>{
    try{
        const workType=req.params.workType;      //Extract the work type from the URl parameter
        if(workType=='chef'||workType=='manager'||workType=='waiter'){    //Validation if user enter different work than these three then process stop gives serror
            const response=await person.find({work:workType});
            console.log('response fetched');
            res.status(200).json(response)
        }else{
            res.status(404).json({Error:'Invalid Work Type'});
        }

    }catch(err){
        console.log(err);
        res.status(500).json({Error:'Internal Server Error'});

    }
})

//Update person record
router.put('/:id',async(req,res)=>{
    try{
        const personId=req.params.id;  //Extract id from url parameter
        const updatedPersonData=req.body; //updated data for the person

        const response=await person.findByIdAndUpdate(personId,updatedPersonData,{
              returnDocument: 'after',  //Return the Updated document
            runValidators:true, //Run Mongoose Validation
        })

        if(!response){
            return res.status(404).json({Error:"Person Not Found"});
        }

         console.log(" DATA UPDATED");
         res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({Error:'Internal Server Error'});
    }
})



module.exports=router;