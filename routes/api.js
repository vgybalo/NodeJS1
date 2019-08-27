var express = require('express');
var router = express.Router();
//const usersRouter 



router.get('/user', (req, res) => {//установлює адресу передачi даних
  res.json({users: [
            {name:'Petya', id:'1', age:'51'},
            {name:'Vasya', id:'2', age:'41'},
            {name:'Artem', id:'3', age:'14'},
            {name:'Kyrill', id:'4', age:'32'},
            {name:'Tymur', id:'5', age:'21'}
    ]})//віддає об"єкт в JSON форматі
  console.log(req.body);
  
});

router.get('/articles', (req, res) => {//установлює адресу передачi даних
  res.json({articles: [
    {title : 'article1',
    authorId : '1',
    thumbnails : 'Lorem ipsum dolor sit amet',
    text : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.'}
    ]})//віддає об"єкт в JSON форматі
  console.log(req.body);
  
});

/*router.get('/user', (req, res) => {//установлює адресу передачi даних
  res.json({articles: 
    {title : 'article1',
    authorId : '1',
    thumbnails : 'Lorem ipsum dolor sit amet',
    text : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.'}
    })//віддає об"єкт в JSON форматі
  console.log(req.body);
  
});*/



module.exports = router;

