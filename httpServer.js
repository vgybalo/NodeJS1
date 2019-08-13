const express = require('express');
const app = express();

const indexRouter = require('./routes/index.js');
const apijsRouter = require('./routes/api.js');
const bodyParser = require('body-parser');

app.use('/',indexRouter);
app.use('/api',apijsRouter);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000,()=> {
    console.log('Listening on 3000');
}
) 