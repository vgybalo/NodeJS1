const ArticleModel = require('../models/article');

module.exports.CreateArticle = async (title, text, userId, done, userDone)=> {   
    try {            
        const article = await ArticleModel ({title, text, userId, done, userDone});
        const data = await article.save();
        console.log(data);
        return data;
    }     
    catch(err) {
        console.log(err);
    }    
};
module.exports.ShowAllArticles = async ()=> {   
    try {            
        const data = await ArticleModel.find({});
        if (data) {
            return data;
        }
    }     
    catch(err) {
        console.log(err);
    }    
};