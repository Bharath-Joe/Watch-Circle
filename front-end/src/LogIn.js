import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


function LogIn(props){
    let history = useHistory();

    async function checkLogIn(){
        // const username=e.target.name.value;
        // const password=e.target.password.value;
        var username= document.getElementById("name").value;
        var password= document.getElementById("password").value;
        try {
            const response = await axios.get('http://localhost:5000/users/' + username + '/' + password);
            console.log(response.status);
            if(response.status === 200){
                history.push('/Shows/:' + username);
            }
          }
        catch (error) {
            console.log(error);
            alert("Invalid Credentials!");
            return false;
        }
    }
      
    return(
        <form>
            <center>
                <img src="https://docs.google.com/drawings/d/e/2PACX-1vR6EnoPyocFiar4BWVpGHrM3PE1Dcfa8lW-PpgsDoV87oGPFct9cH0P2igtEFJTq8qTPSABjCl1V9lC/pub?w=960&amp;h=720" alt=""width="250" height="240"/>
                <h2> Log In </h2>
            </center>
            <input type="text" name="name" id="name" placeholder="Username" size="10"/>
            <input type="password" name="password" id="password" placeholder="Password" width="20px"/>
            <center> <input type = "button" value = "Log In" onClick= {checkLogIn}/> </center>
            <center>
                <input type="button" value="Create Account &#8594;" onClick={() => {history.push('/CreateAccount');
            }} />
            </center>
        </form>

    );
}
export default LogIn