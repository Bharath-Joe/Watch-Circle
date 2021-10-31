import React, {useState, useEffect} from 'react';
import Form from './LogIn';
import Form2 from './CreateAccount';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import axios from 'axios';

function MyApp() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetchAll().then(result => {
      if (result)
        setCharacters(result);
    });
  }, []);
  function updateList(person) { 
    makePostCall(person).then( result => {
      if(result.status === 201){
        console.log(result.data)
        setCharacters([...characters, result.data]);
      }
      else
        alert("Username already exists.");
    });
 }
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={Form} />
          <Form2 handleSubmit={updateList} />
          <Route exact path="/CreateAccount" component={Form2}/>
        </Switch>
      </Router>
    </div>
  )

  async function fetchAll() {
    try {
      const response = await axios.get('http://localhost:5000/users');
      return response.data.users_list;
    }
    catch (error) {
      console.log(error);
      return false;
    }
  }


  // async function makeDeleteCall(id) {
  //   try {
  //     const response = await axios.delete("http://localhost:5000/users/" + id);
  //     return response;
  //  }
  //  catch (error) {
  //     console.log(error);
  //     return false;
  //  }
  // }


  async function makePostCall(person){
    try {
      const response = await axios.post('http://localhost:5000/users', person);
      return response;
    }
    catch (error) {
       console.log(error);
       return false;
    }
 }
}

export default MyApp;
