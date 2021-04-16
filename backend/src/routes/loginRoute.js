const express = require('express');
const loginRouter = express.Router();
const Logindata = require('../model/Logindata');
// const bcrypt = require('bcrypt');
function router(nav){

loginRouter.get('/',function(req,res){
    Logindata.find()
    res.render('login',{
        nav,
        title:'Login'
        
    });
});
loginRouter.get('/signin',function (req,res){
    console.log("hai im added");
    //     email = req.body.email;
    //  Signup.findOne({email :email})
    //   .then(function(email){
    //     if(!email){
          
    //          alert("Enter valid email");
    //         } 
    //         else
    //         {
    //             pass = req.body.pass;
    //         if(pass != user.pass)
    //            {
                   
    //                     alert("Enter valid Password");

    //              }
    //            else{
    //             console.log("account identified")
    //             res.redirect('/');
    //             //  res.status(200).send();
    //            }
               
                

         
    //         }
    //   });
    });

return loginRouter;
}
module.exports = router;