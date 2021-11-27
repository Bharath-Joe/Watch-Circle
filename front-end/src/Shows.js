import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const ColoredLine = ({ color }) => (
    <hr style={{color: color, backgroundColor: color, height: 5}}/>
);

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
            <input type="button" value="Log" onClick={() => {history.push('/');}} style={{float: 'right'}} />
            <h1>Welcome to WatchCircle</h1>
            <ColoredLine color='#0366ee' />
            <center>
                <h2> Show List of {username}</h2>
            </center>
        </div>
        
    );
}
export default Shows