const express=require('express');
const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');
function router(nav){
    // var books=[
    //     {
    //         title:'Tom and Jerry',
    //         authore:'Joseph Barbera',
    //         genre:'cartoon',
    //         img:'tom.jpg'
    //     },
    //     {
    //         title:'Harry Potter',
    //         authore:'J.K.Rowling',
    //         genre:'Fantasy',
    //         img:'harrypotter.jpg'
    //     },
    //     {
    //         title:'Ink and Bone',
    //         authore:'Rachel Caine',
    //         genre:'Fantasy',
    //         img:'download.jpg'
    //     }
    // ]

    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){

            res.render("books",{
                nav,
                title:'Library',
                books
            });
        
        });
    });



    booksRouter.get('/:id',function(req,res){
        var id=req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render('book',{
                nav,
                title:'Library',
                book 
            });
       
        });
    });
    return booksRouter;
}

module.exports=router;