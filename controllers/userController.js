const UserModel = require('../models/user');
module.exports.CreateOne = async (login, pwd)=> {
    try {
        const user = UserModel ({
            login, pwd
        });
        const data = await user.save();
        console.log(data);
        return data;
    }     
    catch(err) {
        console.log(err);
    }    
};
module.exports.LoginOne = async (login, pwd) => {
    
    try {
        const user = await UserModel.findOne({login});
        if (user.pwd === pwd ) {
            return user;
        }
        else {console.log('Invalid login or pwd!'); }
    }
    catch (err) {
        console.log(err);
    }
};