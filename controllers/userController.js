const UserModel = require('../models/user');
const bcrypt = require('bcrypt');
module.exports.CreateOne = async (userEmail, userName, userSurname, userLogin, userBirthday, phone, pwd)=> {
   
    try {
            
            const user = await UserModel ({
                userEmail, userName, userSurname, userLogin, userBirthday, phone, pwd
                        
            });
            user.pwd = await user.hashPwd(pwd);
            const data = await user.save;
             return data;
    }     
    catch(err) {
            console.log(err);
    }    
}
        