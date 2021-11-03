import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function CreateAccount(props) {
  let history = useHistory();
  const [person, setPerson] = useState(
    { name: '', password: '', confirm_password: ''}
  );
  function handleChange(event) {
    const {name, value} = event.target;
    if (name === "password"){
      setPerson({ name: person['name'], password: value, });
    }
    else{
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
      <center> 
        <img src="https://docs.google.com/drawings/d/e/2PACX-1vR6EnoPyocFiar4BWVpGHrM3PE1Dcfa8lW-PpgsDoV87oGPFct9cH0P2igtEFJTq8qTPSABjCl1V9lC/pub?w=960&amp;h=720" alt=""width="250" height="240"/>
        <h1> Create Account </h1>
      </center>
      <input type="text" name="name" id="name" placeholder="Username" value={person.name} onChange={handleChange} />
      <input type="password" name="password" id="password" placeholder="Password" value={person.password} onChange={handleChange} style={{float : 'right'}}/>
      <input type="password" name="confirm_password" id="confirm_password" placeholder="Confirm Password" value={person.confirm_password} onChange={handleConfirmPassoword}/>
      <center> <input type="button" value="Sign Up" onClick={loggedIn} /> </center>
      <center> <input type="button" value="&#8592; Back to Log In" onClick={() => {history.push('/');}} /> </center>
    </form>
  );
}
export default CreateAccount;