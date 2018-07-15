import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    <p>There are {props.repos.length} repos.</p>
    <div>      
      {props.repos.map(repo => 
         <TableRow row={repo}/>
      )}
    </div>
  </div>
)

const TableRow = (props) => (
  <div>
    <td key={props.row.name}>{props.row.name}</td>
    <td key={props.row.owner.login}>{props.row.owner.login}</td>
    <td key={props.row.owner.html_url}>{props.row.owner.html_url}</td>
    <td key={props.row.Description}>{props.row.Description}</td>
    <td key={props.row.stargazers_count}>{props.row.stargazers_count}</td>    
  </div>
)

export default RepoList;

