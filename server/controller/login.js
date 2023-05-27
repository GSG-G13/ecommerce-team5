

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import loginQuery from '../database/queries/loginquery.js';



    
const loginHandler =  (req, res, next) => {


    const userEmail = req.body.userEmail;
    const userPassword = req.body.userPassword;
    const {PRIVATE_KEY} = process.env;

    loginQuery(userEmail).then(result => {
        if (!result.rowCount ) {
            res.send({matched: false})
        } else if (result.rows.length > 0) {

            bcrypt.compare(userPassword, result.rows[0].password, (err, match)=> {
                if(err){
                  res.send({matched: false})

                } else if (match) {
                    console.log('ddd');
                    const token = {
                        id: result.rows[0].id,
                        email: userEmail,
                        name: result.rows[0].fist_name,
                        image: result.rows[0].img_url
                    }
                    
                    jwt.sign(token,PRIVATE_KEY,(err,newToken)=>{
                        if (err){
                            console.log(err);
                        } else {
                            res.cookie('token',newToken).send({matched: true});
                            
                            
                        }
                    })
                    
                } else if (!match) {
                    res.send({matched: false})
                }
                
            });
            
        }
    }).catch(err => console.log(err));

    

};
export default loginHandler;