import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function TableHeader()  {
    return (
      <thead>
        <tr>
          <th>Show Name</th>
          <th>Genre</th>
          <th>Episodes</th>
          <th>Image</th>
          <th>Rating</th>
          <th>Status</th>
          <th>Edit</th>
          <th>Back</th>
        </tr>
      </thead>
    );
  }

function TableBody(props) {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.genre}</td>
          <td>{row.episodes}</td>
          <td>{row.image}</td>
          <td>{row.rating}</td>
          <td>{row.status}</td>

          <td> <button onClick={() => props.editShow(index)}>Edit</button> </td>
          <td> <button onClick={() => props.returnHome(index)}>Back</button> </td>

        </tr>
      );
     }
    );
    return (
        <tbody>
          {rows}
         </tbody>
     );
  }
  
  
  function Table (props) {
    return (
      <table>
        <TableHeader />
        <TableBody showData={props.showData} editShow={props.editShow} returnHome={props.returnHome} />
      </table>
    );
  }
  export default Table;