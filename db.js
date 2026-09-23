const mongoose = require('mongoose');


//Define the mongoDB Connection URl
const mongoURL=process.env.mongoDB_URL;
//const mongoURL=process.env.mongoDB_URL_Local;
const dns=require("dns");
dns.setServers(["1.1.1.1","8.8.8.8"]);


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
