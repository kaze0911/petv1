import User from '../Model/auth.js';
import passport from 'passport';
import bcrypt from 'bcryptjs'

export const GetLogin = (req,res) =>{
    res.render ('auth/login');
}

export const GetEmailLogin = (req,res) =>{
    res.render ('auth/email_login');
}

export const GetRegister = (req,res) =>{
    res.render ('auth/register');
}

export const PostLogin = (req,res,next)=>{
    // console.log(req.body);
    passport.authenticate('local',{
        successRedirect:'/',
        failureRedirect:'/auth/register',
    })(req,res,next);
}
// export const PostLogin = (req,res) =>{
//     res.render ('auth/login');
// }

export const PostEmailLogin = (req,res,next)=>{
    // console.log(req.body);
    passport.authenticate('local',{
        successRedirect:'/',
        failureRedirect:'/auth/register',
    })(req,res,next);
}

export const PostRegister = async(req,res)=>{

    const {user ,pwd ,email} = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(pwd , salt);
    console.log(req.body);
    
    const newUser = new User({
        user: user,
        pwd: hash,
        email: email,
        admin: 0,
    })

    try{
        const saveUser =await newUser.save();
        console.log(saveUser);
        res.redirect('../auth/register');
    }catch(error){
        console.log(error)
    }
};