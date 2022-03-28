const mongoose = require("mongoose");


const loginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        maxLength: 30,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 8,

    },
    firstname: {
        type: String,
        required: true,
        maxLength: 42,

    },
    surname: {
        type: String,
        required: true,
        maxLength: 42,

    },
    date_of_birth: { 

        DD: {
            type: Number,
            required: true,
            min: 1,
            max: 31,
        },
        MM: {
                type: Number,
                required: true,
                min: 1,
                max: 12,    
        },
        YYYY: {
                type: Number,
                required: true,
                min: 1940,
                max: 2022,
        },
    },
})

const Login = mongoose.model("Login", loginSchema);

// exporter le modèle
module.exports = Login;