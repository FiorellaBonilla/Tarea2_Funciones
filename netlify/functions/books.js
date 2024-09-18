'use strict';
const express = require('express');
const serverless = require('serverless-http');
const exp = express();
const bodyParser = require('body-parser');
let books = [
  {
    "id": "1",
    "title": "Operating System Concepts",
    "edition": "9th",
    "copyright": 2012,
    "language": "ENGLISH",
    "pages": 976,
    "author": "Abraham Silberschatz",
    "author_id": 1,
    "publisher": "John Wiley & Sons",
    "publisher_id": 1
  },
  {
    "id": "2",
    "title": "Database System Concepts",
    "edition": "6th",
    "copyright": 2010,
    "language": "ENGLISH",
    "pages": 1376,
    "author": "Abraham Silberschatz",
    "author_id": 1,
    "publisher": "John Wiley & Sons",
    "publisher_id": 1
  },
  {
    "id": "3",
    "title": "Computer Networks",
    "edition": "5th",
    "copyright": 2010,
    "language": "ENGLISH",
    "pages": 960,
    "author": "Andrew S. Tanenbaum",
    "author_id": 2,
    "publisher": "Pearson Education",
    "publisher_id": 2
  },
  {
    "id": "4",
    "title": "Modern Operating Systems",
    "edition": "4th",
    "copyright": 2014,
    "language": "ENGLISH",
    "pages": 1136,
    "author": "Andrew S. Tanenbaum",
    "author_id": 2,
    "publisher": "Pearson Education",
    "publisher_id": 2
  },
  {
    "id": "9",
    "title": "Just for Fun: The Story of an Accidental Revolutionary",
    "edition": "1st",
    "copyright": 2001,
    "language": "ENGLISH",
    "pages": 288,
    "author": "Linus Torvalds",
    "author_id": 5,
    "publisher": "HarperCollins",
    "publisher_id": 5
  },
  {
    "id": "10",
    "title": "Linux Kernel Development",
    "edition": "3rd",
    "copyright": 2009,
    "language": "ENGLISH",
    "pages": 496,
    "author": "Linus Torvalds",
    "author_id": 5,
    "publisher": "Sams Publishing",
    "publisher_id": 6
  },
  {
    "id": "11",
    "title": "Weaving the Web",
    "edition": "1st",
    "copyright": 1999,
    "language": "ENGLISH",
    "pages": 272,
    "author": "Tim Berners-Lee",
    "author_id": 6,
    "publisher": "HarperSanFrancisco",
    "publisher_id": 5
  },
  {
    "id": "12",
    "title": "The Semantic Web",
    "edition": "1st",
    "copyright": 2001,
    "language": "ENGLISH",
    "pages": 352,
    "author": "Tim Berners-Lee",
    "author_id": 6,
    "publisher": "MIT Press",
    "publisher_id": 7
  }
];



const app = express.Router();
app.get('/', (req, res) => {
  res.json(books);
});
app.get('/:id', (req, res) => {
  let book = books.find(i => i.id == req.params.id);
  if (book == undefined)
    res.status(404).send('Book not found');
  else
    res.json(book);
});

exp.use(bodyParser.json());
exp.use('/.netlify/functions/books', app);
module.exports = exp;
module.exports.handler = serverless(exp);