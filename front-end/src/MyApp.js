import React, {useState, useEffect} from 'react';
// import Table from './Table'
import Form from './CreateAccount';
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
      console.log(result.status);
      if(result.status === 201){
        console.log(result.data)
        setCharacters([...characters, result.data]);
      }
    });
 }
  return (
    <div className="container">
      <Form handleSubmit={updateList} />
    </div>
  )


  async function removeOneCharacter(index) {
    makeDeleteCall(characters[index]['_id']).then(result => {
    if (result.status === 204){
      fetchAll().then(result => {
        if (result)
          setCharacters(result);
        });
      }
    })
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


  async function makeDeleteCall(id) {
    try {
      const response = await axios.delete("http://localhost:5000/users/" + id);
      return response;
   }
   catch (error) {
      console.log(error);
      return false;
   }
  }


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