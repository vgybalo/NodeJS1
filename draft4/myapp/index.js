const {Router} = require('express'); //деструктуризация
const router = Router();
router.get('/',(req,res) => {
    res.send('Home page')
})

module.exports = router;