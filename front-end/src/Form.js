import React, {useState} from 'react';

function Form(props) {
  const [person, setPerson] = useState(
     {name: '', password: '',}
  );
function handleChange(event) {
    const { name, value } = event.target;
    if (name === "password")
      setPerson({name: person['name'], password: value});
    else     
       setPerson({name: value, password: person['password']});
}
function submitForm() { //Clears the form for next submit
    props.handleSubmit(person);
    setPerson({name: '', password: ''});
}

function goToSignUpPage() {

}
  
  return (
    <form>
      <img src="https://docs.google.com/drawings/d/e/2PACX-1vR6EnoPyocFiar4BWVpGHrM3PE1Dcfa8lW-PpgsDoV87oGPFct9cH0P2igtEFJTq8qTPSABjCl1V9lC/pub?w=960&amp;h=720" alt=""
          width="280" height="220"/>
      <center> <h1> Welcome to WatchCircle </h1> </center>
      <label htmlFor="name">Username</label>
      <input type="text" 
        name="name" 
        id="name"
        value={person.name}
        onChange={handleChange} />
      <label htmlFor="password">Password</label>
      <input type="text" 
        name="password" 
        id="password"
        value={person.password}
        onChange={handleChange} />
      <center>
        <input type="button" value="Login" onClick={submitForm} />
        <br/>
        <input type="button" value="Create Account" onClick = {goToSignUpPage}/>
      </center>
    </form>
    
  );

}
export default Form;