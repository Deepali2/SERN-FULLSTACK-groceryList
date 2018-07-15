import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
    // this.search = this.search.bind(this);
  }

  componentDidMount() {
    const self = this;
    $.get(  "/repo", function( data ) {
      //console.log(this);
      self.setState({
        repos: JSON.parse(data)
      });
      console.log(self.state.repos);
     });
  }
  search (username) {
    console.log(`${username} was searched`);
    $.ajax({
      type: "POST",
      url: "./repo",
      data: JSON.stringify({username:username}), 
      contentType: "application/json",     
      success: function(data) {console.log('Your data posted successfully!')},
      failure: function(err) {console.log("There is an error:", err)},      
    });
    
  }

  

  render () {
    return (<div>
      <h1>Github Fetcher</h1>      
      <Search onSearch={this.search.bind(this)}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));