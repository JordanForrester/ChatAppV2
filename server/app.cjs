const express = require('express')
const app = express()
const port = 5174
const cors = require('cors');
let bool = false
const dbAPI = require('./database.cjs')
//import * as dbAPI from "./database.js";
app.use(cors())


app.use(express.json());
 

app.post('/', (req, res) => {
    //console.log(req.body.userName);
    res.send();
});

app.post('/signup', (req, res) => {
    
    
    res.send(
        dbAPI.createUser(dbAPI.createConnection(), req.body)
    );

});


app.get('/', (req, res) => {
    
    if (bool == false){
        res.send('invalid');   
    }
    

    

   
    
});


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
    console.log('Press Ctrl+C to quit.');
});