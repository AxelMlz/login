const express = require('express');
const app = express();
const port = 8001;
app.use(express.json());
const mongoose = require("mongoose");
const Login = require("./models/identificationModel")
//Middleware activated by every request
function debug( req, res, next){
    console.log("requête reçue");
    next()
}

mongoose
.connect(
    "mongodb+srv://axel_mlz:pMAywTH8XDi7JUf@database-backend.4wob9.mongodb.net/login?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
    }
)
.then(() => console.log("Connected to MongoDB"));



 app.listen(port, () => {
    console.log('Server started on port: ' + port);
  });
