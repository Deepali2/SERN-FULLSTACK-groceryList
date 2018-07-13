const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!");
});

let repoSchema = mongoose.Schema({
  // TODO: your schema here!  
  repoName: String,
  ownerLogin: String,
  htmlUrl: String,
  Description: String,
  stargazers_count: Number
});

let Repo = mongoose.model('Repo', repoSchema);



let save = (err, repo) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  if (err) return console.error(err);
  console.log(repo);
}

module.exports.save = save;