'use strict';

const express = require('express');
const app = express();

//Route Definitions
app.get('/', getHomePage);
app.get('/data', timeStamper, getData);

function getHomePage(req, res) {
  res.status(200).send('Hello World');
}

function timeStamper(req, res, next) {
  // res.status(200).send('Sushi Pants');
  req.timeStamp=new Date();
  next()
}

function getData(req, res) {
  res.status(200).send(req.timeStamp);
}





function start(port) {
  app.listen(port, () => {
    console.log(`Server up on port ${port}`);

  });
}

module.exports = {
  app: app,
  start: start,
};

