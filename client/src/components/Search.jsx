import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.term);
    $.ajax({
      type: "POST",
      url: "./repo",
      data: this.state.term, 
      contentType: "application/json",     
      success: function(data) {console.log('Your data posted successfully!')},
      failure: function(err) {console.log("There is an error:", err)},      
    });
  }

  render() {
    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={this.state.terms} onChange={this.onChange}/>       
      <button onClick={this.search}> Add Repos </button>
    </div>) 
  }
}

export default Search;