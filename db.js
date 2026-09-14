const mongoose=require('mongoose');
 
// Define the mongoDB Connection URl
const mongoURL='mongodb://localhost:27017/hotels'  //replace 'hotels' with your database name

//set up MongoDB connection

mongoose.connect(mongoURL);

//get the default connection
//mongoose maintain a default connection object representing mongo db connection.

const db=mongoose.connection;

//Define event listeners for database connection

db.on('connected',()=>{
    console.log('Connected to MongoDB Server 🚀 ');
});

db.on('error',(err)=>{
    console.log('MongoDB Connection Error:',err);
});

db.on('disconnected',()=>{
    console.log('MongoDB Disconnected');
});

//Export the Database connection

 module.exports=db;