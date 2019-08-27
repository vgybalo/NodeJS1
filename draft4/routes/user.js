const {Router} = require('express'); //деструктуризация
const router = Router();
router.get('/',(req,res) => {
    res.send('User page')
})
router.get('/123',(req,res) => {
    res.send('User page123')
})


module.exports = router;