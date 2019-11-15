const ArticleModel = require('../models/articleModel');
const bcrypt = require('bcrypt');
module.exports.CreateOneArticle = async (text, title, userId, published, comentId)=> {
   
    try {
            
            const article = await ArticleModel ({
                text, title, userId, published, comentId
                        
            });
           
            const data = await user.save();
            console.log(data);
             return data;
    }     
    catch(err) {
            console.log(err);
    }    
}
        