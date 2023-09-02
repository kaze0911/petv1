import {Strategy as MailruStorage} from "passport-mail"
import bcrypt from "bcryptjs"
import User from "../Model/auth.js"

export default (passport)=>{
    passport.use(new MailruStorage(
        { usernameField: 'email', passportField: 'pwd' },
    (email, pwd, done) => {
        User.findOne({ email: email },(err, user)=>{
            if (err)console.log(err);
            if (!email) {
                return done(null, false, {message: 'No user found!'});
            }
            bcrypt.compare(pwd, user.pwd, (err, isMatch) =>{
                if (err)
                    console.log(err);

                if (isMatch) {
                    return done(null, user);
                } else {
                    return done(null, false, {message: 'Wrong password.'});
                }
            });
            

        });
    //   User.findOne({ user: user })
    //     .then(user => {
    //       if (!user) { return done(null, false) }
    //       bcrypt.compare(pwd, user.pwd, (err, isMatch) => {
    //         if (err) throw err
    //         return isMatch ? done(null, user) : done(null, false)
    //       })
    //     })
    //     .catch(err => done(err));
    //     console.log('error');
    }
    ))
    // serialize user instance to the session
    passport.serializeUser((user, done) => {
        done(null, user.id)
    })

    // deserialize user instance from the session
    passport.deserializeUser((id,done) => {
        User.findById(id, (err, user) =>{
            done(err, user);
        });
    })
}