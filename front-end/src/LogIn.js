import React from 'react';
import { useHistory } from 'react-router-dom';


function LogIn(props){
    let history = useHistory();

    function goToHome(){

    }
    return(
        <form>
            <center>
                <img src="https://docs.google.com/drawings/d/e/2PACX-1vR6EnoPyocFiar4BWVpGHrM3PE1Dcfa8lW-PpgsDoV87oGPFct9cH0P2igtEFJTq8qTPSABjCl1V9lC/pub?w=960&amp;h=720" alt=""width="250" height="240"/>
                <h2> Log In </h2>
            </center>
            <label htmlfor="name">Username</label>
            <input type="text" name="name" id="name" size="10"/>
            <label htmlfor="password" >Password</label>
            <input type="password" name="password" id="password" width="20px"/>
            <center> <input type="button" value="Log In" onClick={goToHome} /> </center>
            <center>
                <input type="button" value="Create Account &#8594;" onClick={() => {history.push('/CreateAccount');
            }} />
            </center>
        </form>

    );
}
export default LogIn