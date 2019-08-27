const {Router} = require('express'); 
const router = Router();
router.get('/',(req,res) => {
    res.send(`<html><head><meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <title>UserList</title>
    </head>
    <body>
    <form action="/api" method="POST">
    <div class="block"><label for="name">Имя пользователя</label><input type="text" id="name"></div>
    <div class="block"><label for="age">Возраст</label><input type="number" id="age"></div>
    <div class="block"> <input type="submit" id="submit"></div>
 
        <script src="main.js"></script>
    </body></html>`)
})

module.exports = router;