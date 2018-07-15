import React from 'react';

const TableRow = (props) => (
    <tbody>
      <tr>
        <td key={props.row.name}>{props.row.name}</td>
        <td key={props.row.owner.login}>{props.row.owner.login}</td>
        <td key={props.row.owner.html_url}>{props.row.owner.html_url}</td>
        <td key={props.row.Description}>{props.row.Description}</td>
        <td key={props.row.stargazers_count}>{props.row.stargazers_count}</td>    
      </tr>
    </tbody>
  )

export default TableRow;