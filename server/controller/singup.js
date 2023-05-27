// const bcrypt = require("bcrypt");
// const {signupQuery} = require("../database/queries/signup");
// const {getUserQuery} = require("../database/queries/getUserQuery");
// const createError = require('http-errors');


import bcrypt from 'bcrypt'; 
import getUserQuery from '../database/queries/getUserQuery.js';
import signupQuery from '../database/queries/signupQuery.js'


const signUpHandler = (req,res, next) =>{
console.log(req.body);
    const userEmail = req.body.userEmail;
    const userFirstName = req.body.userFirstName;
    const userLastName = req.body.userLastName;
    const userPassword = req.body.userPassword;
    const userConfirmPass = req.body.userConfirmPassword;
    const picture = req.body.userImage || "https://www.shutterstock.com/image-illustration/photo-silhouette-male-profile-white-600w-1019597599.jpg"; 


    if (userFirstName.length < 5 || !userEmail.includes('@') || !userEmail.includes('.com') || userPassword != userConfirmPass) {
        res.send({valid: 'invalid entries!'})
    } else {    

        getUserQuery(userEmail).then(result => {
            console.log(result.rows.length, 'inspect rows of users');
            if (result.rows.length === 0) {

                bcrypt.hash(userPassword,10).then(hashedPassword=> {
                    signupQuery(userFirstName, userLastName,userEmail,hashedPassword,picture).then(result => {
                        res.send({valid: 'usccessfuly registered'})
                    })
                });
            } else {
                res.send({valid: 'user aleady exists!'})

            }
        })

    }
};


export default signUpHandler;

