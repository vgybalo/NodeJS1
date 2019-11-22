const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;


passport.use(new GoogleStrategy({
    clientID:'876907667610-r5epooh54tdss8rp3gp0obfsemno0ltv.apps.googleusercontent.com',
    clientSecret:'CtIxvPO_JIqe_fcQ5dgL8DHU',
    callbackURL:'/auth/google/cb',
    
},(accessToken,refreshToken,profile,done)=>{
    console.log('123');
    return done (null,{name:'Vasya'});
}));

module.exports=passport;