const mongoose = require('mongoose');

//Define the mongoDB Connection URl
const mongoURL='mongodb://localhost:27017/hotels'  //replace 'hotels' with your database name
//const mongoURL = 'mongodb://admin:Pratik2005@ac-1lrltd0-shard-00-00.yhcnaxh.mongodb.net:27017,ac-1lrltd0-shard-00-01.yhcnaxh.mongodb.net:27017,ac-1lrltd0-shard-00-02.yhcnaxh.mongodb.net:27017/?ssl=true&replicaSet=atlas-uqpy9v-shard-0&authSource=admin&appName=Cluster0';
//set up MongoDB connection

mongoose.connect(mongoURL);

//get the default connection
//mongoose maintain a default connection object representing mongo db connection.

const db = mongoose.connection;

//Define event listeners for database connection

db.on('connected', () => {
    console.log('Connected to MongoDB Server 🚀 ');
});

db.on('error', (err) => {
    console.log('MongoDB Connection Error:', err);
});

db.on('disconnected', () => {
    console.log('MongoDB Disconnected');
});

//Export the Database connection

module.exports = db;
