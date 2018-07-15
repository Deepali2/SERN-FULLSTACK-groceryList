const express = require('express');
const db = require('../database/index.js');
const data = require('../data.json');
//console.log(data);
let app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));
let saveDatafunc = require('../database/index.js').save;
console.log('this is the function:', saveDatafunc);

app.post(`/repo`, function (req, res) {
  console.log(req.body);
  saveDatafunc(null, [{repoName: 'recastly',
    ownerLogin: 'Deepali2',
    htmlUrl: 'https://',
    Description: '',
    stargazers_count: 8
  }]);
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
  console.log('get is working AGAIN');
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


//testing the database

// save(db);
