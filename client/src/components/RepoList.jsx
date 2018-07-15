import React from 'react';
import TableRow from './TableRow.jsx';
const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    <p>There are {props.repos.length} repos.</p>
    <table> 
      <tbody>
        <tr>
          <th>Repository Name</th> 
          <th>Owner's Github Handle </th> 
          <th>Owner's HTML URL</th> 
          <th>Description</th> 
          <th>Stargazers_count</th>        
        </tr> 
      </tbody> 
      {props.repos.map((repo, index) => 
         <TableRow row={repo} key={index}/>
      )}
    </table>
  </div>
)

// const TableRow = (props) => (
//   <tbody>
//     <tr>
//       <td key={props.row.name}>{props.row.name}</td>
//       <td key={props.row.owner.login}>{props.row.owner.login}</td>
//       <td key={props.row.owner.html_url}>{props.row.owner.html_url}</td>
//       <td key={props.row.Description}>{props.row.Description}</td>
//       <td key={props.row.stargazers_count}>{props.row.stargazers_count}</td>    
//     </tr>
//   </tbody>
// )

export default RepoList;

