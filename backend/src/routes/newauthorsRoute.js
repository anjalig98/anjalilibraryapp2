const express = require('express');
const newauthorsRouter = express.Router();
const Authordata = require('../model/Authordata');
function router(nav){

newauthorsRouter.get('/',function(req,res){
    res.render("newauthors",
    {
        nav,
        title:'Library'
    });
});
    newauthorsRouter.get('/add',function(req,res){
        var items= {
        title: req.query.title,
        year: req.query.year,
        works: req.query.works,
        img: req.query.img
        }
        var newitem=Authordata(items);
        newitem.save(); //saving to database
        res.redirect('/authors');
    });

    return newauthorsRouter;
}
module.exports = router;