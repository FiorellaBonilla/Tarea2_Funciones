'use strict';
const express = require('express');
const serverless = require('serverless-http');
const exp = express();
const bodyParser = require('body-parser');
let authors = [
  {
    "id": 1,
    "name": "Abraham Silberschatz",
    "nationality": "American",
    "occupation": "Computer Scientist",
    "book_ids": ["1", "2"]
  },
  {
    "id": 2,
    "name": "Andrew S. Tanenbaum",
    "nationality": "Dutch",
    "occupation": "Professor and Computer Scientist",
    "book_ids": ["3", "4"]
  },
  {
    "id": 5,
    "name": "Linus Torvalds",
    "nationality": "Finnish",
    "occupation": "Software Engineer",
    "book_ids": ["9", "10"]
  },
  {
    "id": 6,
    "name": "Tim Berners-Lee",
    "nationality": "British",
    "occupation": "Computer Scientist",
    "book_ids": ["11", "12"]
  }
];


const app = express.Router();
app.get('/', (req, res) => {
  res.json(authors);
});
app.get('/:id', (req, res) => {
  let author = authors.find(i => i.id == req.params.id);
  if (author == undefined)
    res.status(404).send('Author not found');
  else
    res.json(author);
});
exp.use(bodyParser.json());
exp.use('/.netlify/functions/authors', app);
module.exports = exp;
module.exports.handler = serverless(exp);