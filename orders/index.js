const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');

require('dotenv').config();

const ordersRouter = require('./routes/orders');


const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
// app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const dbUri = process.env.DATABASE_URL;

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,},() => {
  console.log('Connected to DB');
}).catch(err => console.log(err));

app.use('/api/orders', ordersRouter);

var server = app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});