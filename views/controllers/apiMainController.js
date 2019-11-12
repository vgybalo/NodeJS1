module.exports.apiMainController = async (req, res)=> {
   
    try {
        if(!req.body) return res.sendStatus(400);
        if (!req.body.useremail) {
           
                const {userEmail, userName, userSurname, userLogin, userBirthday, phone, pwd} = req.body;
                const user = await UserModel ({
                    userEmail, userName, userSurname, userLogin, userBirthday, phone, pwd
                           
                });
                user.pwd = await user.hashPwd(pwd);
                await user.save();
                res.send('Ok!');
         
        } 
        else {
        
           
                const {useremail, userpwd} = req.body;
                const user = await UserModel.findOne({useremail});
                const auth = await user.comparePwd(pwd);
                if (auth) {
                    res.cookie = ('auth','ok');
                }
                else {
                    res.send('Invalid pwd');
                }
            
            
            
        }

    }    
    catch(err) {
                console.log(err);
            }    
}
        

