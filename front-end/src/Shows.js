import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';



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
            console.log(response.data[0]["shows"]); // Gets access to shows in JSON object.
          }
        catch (error) {
            console.log(error);
            console.log(":(");
            return false;
        }
    }
    return(
        <div>
            <center>
                <h2> "Username" Show List ... </h2>
                <input type="button" value="Log Out" onClick={() => {history.push('/');}} />
            </center>
        </div>
        
    );
}
export default Shows