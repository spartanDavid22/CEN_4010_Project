//Creating the express and app variable to be able to use backend
const express = require("express");
const app = express();

//Setting up connection to AWS RDS database
const mysql = require("mysql");

//Setting up static folder
app.use(express.static("Front-end"));

const connection = mysql.createConnection({
    host     : "",
    user     : "admin",
    password : "westboca2022",
    port     : "3307",
    database : "westboca"
})


app.get("/", (req,res)=>{

    res.sendFile(__dirname + "/Front-end/login.html");

})

app.get("/login.html", (req,res)=>{

    res.sendFile(__dirname + "/Front-end/login.html");

})


app.get("/register.html", (req,res)=>{

    res.sendFile(__dirname + "/Front-end/register.html");

})

app.get("/index.html", (req,res)=>{

    res.sendFile(__dirname + "/Front-end/dashboard.html");

})

app.get("/register.html", (req,res)=>{

    res.sendFile(__dirname + "/Front-end/password.html");

})
//Closing connection to database
connection.end();

//Setting up the backend to listen on a specific port
app.listen(3000, ()=>{
    console.log("Server listening on port 3000...");
})