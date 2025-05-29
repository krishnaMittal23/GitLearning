// npm init -y
// npm install express

const express = require('express');
 
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json()); //to access req.body and print the body of the request

app.get('/', (req, res) => {
    res.send("hello world!!!")
})

app.post('/conversation', (req,res)=>{
    //console.log(req.headers);
    console.log(req.body);

    res.send({
        message: "This is a post request"   
    })
    
})


console.log("latest commit")


//new branch feature is added
console.log("feature branch is added")

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
    
})