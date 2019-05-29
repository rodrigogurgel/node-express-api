const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/userController')(app);


app.listen(process.env.PORT || 3000, () => {
    console.log('Port: 3000');
});