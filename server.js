const express = require('express')
const app = express();
require('dotenv').config();
const db = require('./db');
const passport=require('./auth');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT=process.env.PORT||3000;    


//Middleware Function
const logRequest=(req,res,next)=>{     
    console.log(`[${new Date().toLocaleString()}] Request Made To:${req.originalUrl}`);
    next();  //Move on to the next Phase
}
app.use(logRequest);  

app.use(passport.initialize());
const localAuthMiddleware=passport.authenticate('local',{session:false})


app.get('/', function (req, res) {   
    res.send('Welcome to our Hotel');    
})              


//Import the Router file
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');
//use the Router
app.use('/person',localAuthMiddleware, personRoutes);
app.use('/menuItem', menuItemRoutes);


app.listen(PORT, () => {
    console.log('✅ Listening on port 3000');
})





