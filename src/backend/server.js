const express = require('express');
const app = express();
const port = 8001;
app.use(express.json());
const mongoose = require("mongoose");
const Login = require("./models/identificationModel")
require('dotenv').config({ path: "../../.env"})

//Middleware activated by every request
function debug( req, res, next){
    console.log("requête reçue");
    next()
}

mongoose
.connect(
    process.env.MONGO_URI,
    {
        useNewUrlParser: true,
    }
)
.then(() => console.log("Connected to MongoDB"));



 app.listen(port, () => {
    console.log('Server started on port: ' + port);
  });
