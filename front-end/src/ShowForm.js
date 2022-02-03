import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

const ColoredLine = ({ color }) => (
  <hr style={{ color: color, backgroundColor: color, height: 5 }} />
);

function Form(props) {
  const [person, setPerson] = useState({
    name: "",
    job: "",
    genre: "",
    episode: "",
    rating: "",
    status: "",
  });

  let history = useHistory();
  let urlparam = window.location.pathname;
  var username = ""
  for (let i = 8; i < urlparam.length; i++) {
    username += urlparam[i];
  }

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "genre")
      setPerson(
        { name: person["name"], genre: value }
      );
    else
      setPerson(
        { name: value, genre: person["genre"] });

  }

  function handleEpisode(event) {
    person['episode'] = event.target.value
  };
  function handleRating(event) {
    person['rating'] = event.target.value
  };
  function handleStatus(event) {
    person['status'] = event.target.value
  };

  function submitForm() {
    person["user"] = username;
    props.handleSubmit(person);
    setPerson({ name: "", job: "", genre: "", episode: "", rating: "", status: "" });
  }

  return (
    <form>
      <div>
        <input type="button" value="Log Out" onClick={() => { history.push('/'); }} style={{ float: 'right' }} />
        <h1>Welcome to WatchCircle</h1>
        <ColoredLine color='#0366ee' />
        <center>
          <h2> Show List of {username}</h2>
        </center>
      </div>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={person.name}
        onChange={handleChange}
      />
      <label htmlFor="genre">Genre</label>
      <input
        type="text"
        name="genre"
        id="genre"
        value={person.genre}
        onChange={handleChange}
      />
      <label htmlFor="episode">Episodes</label>
      <input
        type="text"
        name="episode"
        id="episode"
        value={person.episode}
        onChange={handleEpisode}
      />
      <label htmlFor="rating">Rating
      <select name="rating" id="rating" onChange={handleRating}>
        <option value="1">Select a Rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      </label>

      <div>
      <label htmlFor="status">
      <input type="radio" name="status" id="Ongoing" value="Ongoing" onChange={handleStatus}/>Ongoing
      </label>
      <label htmlFor="status">
      <input type="radio" name="status" id="Completed" value="Completed" onChange={handleStatus}/>Completed
      </label>
      <input type="button" value="Add" onClick={submitForm} />
      </div>
    </form>
  );
}

export default Form;