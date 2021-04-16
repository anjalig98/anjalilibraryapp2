const express=require('express');
const app=new express;
const port = process.env.PORT || 3000;
const nav=[
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/admin',name:'Add Book'
    },
    {
        link:'/newauthor',name:'Add Author'
    },
    {
        link:'/login',name:'Login'
    },
    {
        link:'/signup',name:'Signup'
    }
    
];
   


const booksRouter=require('./src/routes/bookRoutes')(nav);
const authorsRouter=require('./src/routes/authorRoutes')(nav);
const newbooksRouter=require('./src/routes/newbooksRoute')(nav);
const newauthorsRouter=require('./src/routes/newauthorsRoute')(nav);
const signupRouter=require('./src/routes/signupRoute')(nav);
const loginRouter=require('./src/routes/loginRoute')(nav);


app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/admin',newbooksRouter);
app.use('/newauthor',newauthorsRouter);
app.use('/signup',signupRouter);
app.use('/login',loginRouter);

app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:'Library'
    });
});


// app.listen(2560);

app.listen(port,()=>{console.log("Server ready at " + port)});