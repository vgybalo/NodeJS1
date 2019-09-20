const express = require('express');

const router = express.Router();

const Ajv = require('ajv');

const ajv = new Ajv();
const carSchema = require('../schemas/user.js');


/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.post('/', (req, res) => {
  console.log(req.body.name);
  const validate = ajv.compile(carSchema);
  const valid = validate({
    model: req.body.model,
    name: req.body.name,
    mileage: req.body.mileage,
    qualities: req.body.qualities,
    price: req.body.price,
  });
  console.log(valid);
  if (!valid) {
    const { errors } = validate;
    const result = { status: 'invalid data' };
    console.log(errors);
    res.json(result);
  }
  else res.send(valid);
});

module.exports = router;
