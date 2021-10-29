import React, { useState } from 'react';
import Form from './CreateAccount';
import {BrowserRouter as Router, Switch, Route, Link, userRouteMatch, useParams} from "react-router-dom";



function LogIn(props){

    function goToHome(){

    }

    function goToCreateAccount(){
        
    }

    return(
        <form>
            <center>
            <img src="https://docs.google.com/drawings/d/e/2PACX-1vR6EnoPyocFiar4BWVpGHrM3PE1Dcfa8lW-PpgsDoV87oGPFct9cH0P2igtEFJTq8qTPSABjCl1V9lC/pub?w=960&amp;h=720" alt=""width="290" height="225" />
            <h1> Log In </h1> 
            </center>
            <label htmlFor="name">Username</label>
            <input type="text"
            name="name"
            id="name"/>
            <label htmlFor="password" >Password</label>
            <input type="password"
            name="password"
            id="password"
            style={{float : 'right'}}/>
            <center>
            <input type="button" value="Log In" onClick={goToHome} />
            </center>
            
            <div>
            <center>
                
                <Link to="/createAccount"><button>
                Go to Page CreateAccount
                </button>
                </Link>
                </center>
            </div>
            </form>

    );
}
export default LogIn