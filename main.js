const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());
const db = require('./db');

const books = require('./books');


app.get('/books', books.findAll);
app.put('/books', books.insertNew);


const PORT = 3000;
app.listen(PORT, () => {
  console.log('SERVER IS WORKING ON http://localhost:' + PORT);
});