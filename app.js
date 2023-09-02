import express from "express";
import mongoose from "mongoose";
import methodeOverride from 'method-override';
import passport from "passport";
import passportConfig from "./Config/passport.js";
import emailConfig from "./Config/email.js";
import session from "express-session";
import flash from "connect-flash";


const app = express();
//template engine
app.set("view engine","ejs");
app.set("views", "./views")


const connect = async ()=>{
   
    try {
         await mongoose.connect('mongodb://localhost:27017/petshop');
        console.log('db is connect')
        } catch (error) {
        console.log(error)
    }   
    
    }
//middleware
//app.use("/favicon.ico",express.static("img/favicon.ico"));
app.use(express.static("public"));
app.use(methodeOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(session({
    secret: 'Enoch',
    resave: 'true',
    saveUninitialized: 'true'
}))

// Express Messages middleware
app.use(flash());
// app.use((req, res, next)=> {
//     res.locals.messages = require('express-messages')(req, res);
//     next();
// });


passportConfig(passport);
// emailConfig(passport);

app.use(passport.initialize());
app.use(passport.session());

//api
import IndexRoutes from './Routes/index.js';
import ProductRoutes from './Routes/product.js';
import ServiceRoutes from './Routes/service.js';
import CourseRoutes from './Routes/course.js';
import BlogRoutes from './Routes/blog.js';
import AboutRoutes from './Routes/about.js';
import AuthRoutes from './Routes/auth.js';
import AccountRoutes from './Routes/account.js';

// import AdmIndexRoutes from './Routes/index_adm.js';
// import AdmAboutRoutes from './Routes/about_adm.js';
// import AdmAccountRoutes from './Routes/account_adm.js';
// import AdmProductRoutes from './Routes/product_adm.js';
// import AdmServiceRoutes from './Routes/service_adm.js';
// import AdmCourseRoutes from './Routes/course_adm.js';
// import AdmBlogRoutes from './Routes/blog_adm.js';

app.use('/', IndexRoutes);
app.use('/product', ProductRoutes);
app.use('/services', ServiceRoutes);
app.use('/course', CourseRoutes);
app.use('/blog', BlogRoutes);
app.use('/about', AboutRoutes);
app.use('/auth', AuthRoutes);
app.use('/account', AccountRoutes);

// app.use('/admin', AdmIndexRoutes);
// app.use('/admin/about', AdmAboutRoutes);
// app.use('/admin/blog', AdmBlogRoutes);
// app.use('/admin/product', AdmProductRoutes);
// app.use('/admin/services', AdmServiceRoutes);
// app.use('/admin/course', AdmCourseRoutes);
// app.use('/admin/account', AdmAccountRoutes);

app.use(function(req, res, next){
    res.status(404).render('index/404');
});


//port
app.listen(3000,connect(),()=>{
    console.log("server 3000")
})