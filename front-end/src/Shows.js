import React from 'react';
import { useHistory } from 'react-router-dom';


function Shows(props){
    let history = useHistory();
    console.log(props.location.key)
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