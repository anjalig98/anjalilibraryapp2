const express = require('express');
const newbooksRouter = express.Router();
const Bookdata = require('../model/Bookdata');
function router(nav){   
    newbooksRouter.get('/',function(req,res){
        res.render('newbooks',
        {
            nav,
            title:'Library'
        });
    });
    newbooksRouter.post('/add',function(req,res){
        var items= {
            title:req.body.title,
            authore:req.body.authore,
            genre:req.body.genre,
            img:req.body.img
        }
        var book=Bookdata(items);
        book.save(); //saving to database
        res.redirect('/books');
        
            
        // res.send('Hey Iam Added');
    });

    newbooksRouter.post('/update',function(req,res){
        res.render('update');
        const old={
            title:req.body.update
        };
        const latest={
            
                $set:{
                    title:req.body.title,
                    authore:req.body.authore,
                    genre:req.body.genre,
                    img:req.body.img
                }
            
        };
        console.log(old);
        console.log(latest);
        
        Bookdata.updateOne(old,latest,function(req,res){
            var book=Bookdata(latest);
            book.save();
           
        });
        res.redirect('/books');
    
    });

    newbooksRouter.post('/delete',function(req,res){
        const old={
                title:req.body.deletename
        };
        Bookdata.deleteOne(old,function(err,obj){
            if (err) throw err;
                console.log(" document(s) deleted");
            });
        res.redirect('/books'); 
    });
    return newbooksRouter;
}
module.exports = router;