const UserModel = require('../models/user');
const bcrypt = require('bcrypt');
module.exports.CreateOne = async (login, pwd, role)=> {
   
    try {
            
            const user = await UserModel ({
                login, pwd, role
                        
            });
            user.pwd = await user.hashPwd(pwd);
            const data = await user.save();
            console.log(data);
             return data;
    }     
    catch(err) {
            console.log(err);
    }    
}
        