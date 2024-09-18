'use strict';
const express = require('express');
const serverless = require('serverless-http');
const exp = express();
const bodyParser = require('body-parser');
let publishers = [
  {
    "id": 1,
    "name": "John Wiley & Sons",
    "country": "United States",
    "founded": 1807,
    "publisher_name": "John Wiley",
    "book_ids": ["1", "2"],
    "author_ids": ["1"]
  },
  {
    "id": 2,
    "name": "Pearson Education",
    "country": "United Kingdom",
    "founded": 1844,
    "publisher_name": "Samuel Pearson",
    "book_ids": ["3", "4"],
    "author_ids": ["2"]
  },
  {
    "id": 5,
    "name": "HarperCollins",
    "country": "United States",
    "founded": 1989,
    "publisher_name": "Harold Collins",
    "book_ids": ["9", "11"],
    "author_ids": ["5", "6"]
  },
  {
    "id": 6,
    "name": "Sams Publishing",
    "country": "United States",
    "founded": 1946,
    "publisher_name": "Howard W. Sams",
    "book_ids": ["10"],
    "author_ids": ["5"]
  },
  {
    "id": 7,
    "name": "MIT Press",
    "country": "United States",
    "founded": 1962,
    "publisher_name": "James R. Killian",
    "book_ids": ["12"],
    "author_ids": ["6"]
  }
];

const app = express.Router();
app.get('/', (req, res) => {
  res.json(publishers);
});
app.get('/:id', (req, res) => {
  let publisher = publishers.find(i => i.id == req.params.id);
  if (publisher == undefined)
    res.status(404).send('Publisher not found');
  else
    res.json(publisher);
});

exp.use(bodyParser.json());
exp.use('/.netlify/functions/publishers', app);
module.exports = exp;
module.exports.handler = serverless(exp);