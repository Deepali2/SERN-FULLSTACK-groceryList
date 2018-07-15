const mongoose = require('mongoose');

//connection to the test database running on the localhost
mongoose.connect('mongodb://localhost/fetcher');

//test to see if the connection is successfull or has errors
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connection made');
});
  //reference to our schema
  let repoSchema = mongoose.Schema({
    // TODO: your schema here!  
    repoName: String,
    ownerLogin: String,
    htmlUrl: String,
    Description: String,
    stargazers_count: Number
  });

  //compiling our schema into a model. 
  //model is a class with which we construct documents
  let Repo = mongoose.model('Repo', repoSchema);
 

  // let saverepo = (newRepo, cb) => {
  //    //a repo document, an instance of the constructor Repo
  //   let repo = new Repo({
  //     repoName: newRepo.name,
  //     // ownerLogin: newRepo.owner.login,
  //     // htmlUrl: newRepo.owner.html_url,
  //     // Description: newRepo.description,
  //     // stargazers_count: newRepo.stargazers_url
  //   }); 

    let saverepo = (err, newRepo) => {
      //a repo document, an instance of the constructor Repo
        if (err) return console.error(err);
        console.log('INSERT SUCCESSFULL');
        Repo.insertMany(newRepo);
    };
  

module.exports.save = saverepo;