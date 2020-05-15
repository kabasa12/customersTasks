const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use( bodyParser.json() );        //  Accept JSON as post input

const customers = require('./routes/customers');
const tasks = require('./routes/tasks');

app.use(customers);
app.use(tasks);

app.use((req, res) => {
    res.send('<h1>Page not found</h1>')
});

app.listen(4000);