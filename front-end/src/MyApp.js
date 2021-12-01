import React, { useState, useEffect } from 'react';
import Form from './LogIn';
import Form2 from './CreateAccount';
import Form3 from './ShowForm';
import Table from './ShowTable';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
    makePostCall(person).then(result => {
      if (result.status === 201) {
        console.log(result.data);
        setCharacters([...characters, result.data]);
      }
      else
        alert("Username already exists.");
    });
  }

  function updateShowsList(show) { 
    console.log("In updateShowsList");
    console.log(show);
    updateUserShows(show).then( result => {
      if(result.status === 201){
        console.log("In updateShowsList");
        console.log(result.data);
        const userNameVal = result.data['name']
        console.log("Printing out characters: ")
        for(let j = 0; j < characters.length; j++){
          if(characters[j]['name'] === userNameVal){
            console.log("location in array " + j)
            characters.splice(j, 1);
          }
        }
        setCharacters([...characters, result.data]);
      }
      else
        alert("Cannot Update Shows");
    });
  }
  //Need function for updateShowList

  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={Form} />
          <Route exact path="/Shows/:username" component={Form3} key={document.location.href}>
            <Form3 handleSubmit={updateShowsList} />
            <Table characterData={characters} removeShow={removeOneShow} />
          </Route>
          <Route exact path="/CreateAccount" component={Form2}>
            <Form2 handleSubmit={updateList} />
          </Route>
        </Switch>
      </Router>
    </div>
  )

  // async function removeOneCharacter(index) {
  //   //.then is to fetch the updated list and set the new list as result
  //   makeDeleteCall(characters[index]['_id']).then(result => {
  //   if (result.status === 204){
  //     fetchAll().then(result => {
  //       if (result)
  //         setCharacters(result);
  //       });
  //     }
  //   })
  // }

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

  function removeOneShow(index, user_Name) {
		// const updated = characters.filter((character, i) => {
		// 	return i !== index;
		// });
		// makeDeleteCall(characters[index]);

		// setCharacters(updated);
    for(let j = 0; j < characters.length; j++){
      if(characters[j]['name'] === user_Name){
        console.log("location in array " + j)
        console.log("I am at the user's shows: " + characters[j]['shows'][index].name);//.splice(j, 1);
        characters[j]['shows'].splice(index, 1);
      }
    }
    console.log("Hello working:" + user_Name + " Show Index " + index);
    setCharacters([...characters]);
  }


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


  async function makePostCall(person) {
    try {
      const response = await axios.post('http://localhost:5000/users', person);
      return response;
    }
    catch (error) {
      console.log(error);
      return false;
    }
  }

  async function updateUserShows(person) {
    try {
      const response = await axios.post('http://localhost:5000/users/Shows/' + person["user"], person);
      console.log("In updateUserShows")
      console.log(response);
      return response;
    }
    catch (error) {
      console.log(error);
      return false;
    }
  }
}

export default MyApp;
