const express = require('express');
const db = require('../database/index.js');
const data = require('../data.json');
//console.log(data);
let app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post(`/repo`, function (req, res) {
  console.log(req.body);
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  //res.send()

});

//url: `https://api.github.com/${username}/repos`,

app.get(`/repo`, function (req, res) {

  // TODO - your code here!
  // This route should send back the top 25 repos
  res.send(JSON.stringify(data));
  console.log('get is working');
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


//testing the database

// save(db);
