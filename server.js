const express = require('express')
const app = express();

//const dns = require('dns');
//dns.setDefaultResultOrder('ipv4first');

const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/', function (req, res) {
    res.send('Welcome to our Hotel');
})


//Import the Router file
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');
//use the Router
app.use('/person', personRoutes);
app.use('/menuItem', menuItemRoutes);


app.listen(3000, () => {
    console.log('Listening on port 3000');
})

