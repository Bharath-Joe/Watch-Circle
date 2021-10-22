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
      <center> 
      <label htmlFor="name">Username</label>
      <input
        type="text"
        name="name"
        id="name"
        value={person.name}
        onChange={handleChange} />
      <label htmlFor="password">Password</label>
      <input
        type="text"
        name="password"
        id="password"
        value={person.password}
        onChange={handleChange} />
        <input type="button" value="Login" onClick={submitForm} />
        <br/>
        <input type="button" value="Create Account" onClick={goToSignUpPage}/>  
      </center>
    </form>
    
  );

}
export default Form;