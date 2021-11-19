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
    if (this.props.data) {
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
}

function TableFooter(props) {
	return (
			<tr>
                <td><button onClick={() => props.addShow()}>Add Show</button> </td>
                <td><button onClick={() => props.filterShows()}>Filter Shows</button> </td>
				<td><button onClick={() => props.editShows()}>Edit Shows</button> </td>
			</tr>
	);
    }

function Shows(props){
    useEffect(() => {getInfo()});
    let history = useHistory();
    console.log(props.location.pathname)
    let urlparam = props.location.pathname
    var username = ""
    for (let i = 8; i < urlparam.length; i++) {
        username += urlparam[i];
    }
    async function getInfo(){
        console.log(username);
        try {
            const response = await axios.get('http://localhost:5000/users/Shows/' + username);
            var count = Object.keys(response.data[0]).length;
            console.log(count);     
            console.log(response.data[0]); // Gets access to shows in JSON object.
          }
        catch (error) {
            console.log(error);
            return false;
        }
    }
    return(
        <div>
            <center>
                <h2> Show List of {username}</h2>
                <table>
                    <TableHeader />
                    {/* <TableBody showData={props.showData} editShow={props.editShow} returnHome={props.returnHome} /> */}
                    
                </table>
                <TableFooter
				        characterData={props.characterData}
				        addShow={props.addShow}
			        />
                <input type="button" value="Log Out" onClick={() => {history.push('/');}} />
            </center>
        </div>
        
    );
}
export default Shows