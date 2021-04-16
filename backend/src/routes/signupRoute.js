const express = require('express');
const signupRouter = express.Router();
const Signupdata = require('../model/Signupdata');
function router(nav){

signupRouter.get('/',function(req,res){
    Signupdata.find()
    res.render("signup",{
        nav,
        title:'Signup'
        
    });
});
signupRouter.get('/create',function (req,res){
    console.log("Hai Iam added");
});
return signupRouter;
}
module.exports = router;