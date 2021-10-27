import React, { useState } from 'react';


function CreateAccount(props) {
  const [person, setPerson] = useState(
    { name: '', password: '', confirm_password: ''}
  );
  function handleChange(event) {
    const {name, value} = event.target;
    if (name === "password"){
      console.log("In if statement");
      setPerson({ name: person['name'], password: value, });
    }
    else{
      console.log("In else statement");
      setPerson({ name: value, password: person['password'],});
    }
  }

function handleConfirmPassoword(event) {
    person['confirm_password'] = event.target.value
  };

  function loggedIn() {
    var password = person['password'];
    var confirmPassword = person['confirm_password'];
    if(password !== confirmPassword)
      alert("Passwords don't match!")
    else
      props.handleSubmit(person);
    setPerson({ name: '', password: '', confirm_password: ''});
  }

  return ( 
    <form>
      <head>
        <script type="text/javascript" src="https://code.jquery.com/jquery-1.7.1.min.js"></script>
      </head>
      <center>
        <img src="https://docs.google.com/drawings/d/e/2PACX-1vR6EnoPyocFiar4BWVpGHrM3PE1Dcfa8lW-PpgsDoV87oGPFct9cH0P2igtEFJTq8qTPSABjCl1V9lC/pub?w=960&amp;h=720" alt=""width="290" height="225" />
        <h1> Welcome to WatchCircle </h1> 
      </center>
      <label htmlFor="name">Username</label>
      <input type="text"
        name="name"
        id="name"
        value={person.name}
        onChange={handleChange} />
      <label htmlFor="password" >Password</label>
      <input type="text"
        name="password"
        id="password"
        value={person.password}
        onChange={handleChange} 
        style={{float : 'right'}}/>
      <label htmlFor="confirm_password" >Confirm Password</label>
      <input type="text"
        name="confirm_password"
        id="confirm_password"
        value={person.confirm_password}
        onChange={handleConfirmPassoword}/>
      <div class="registrationFormAlert" id="divCheckPasswordMatch"></div>
      <center>
        <input type="button" value="Sign Up" onClick={loggedIn} />
      </center>
    </form>

  );

}
export default CreateAccount;