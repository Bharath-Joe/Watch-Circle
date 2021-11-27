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
  // useEffect(() => { getInfo() });
  let history = useHistory();
  let urlparam = window.location.pathname;
  var username = ""
  for (let i = 8; i < urlparam.length; i++) {
    username += urlparam[i];
  }
  // async function getInfo() {
  //   console.log(username);
  //   try {
  //     const response = await axios.get('http://localhost:5000/users/Shows/' + username);
  //     var count = Object.keys(response.data[0]).length;
  //     console.log(count);
  //     console.log(response.data[0]); // Gets access to shows in JSON object.
  //   }
  //   catch (error) {
  //     console.log(error);
  //     return false;
  //   }
  // }


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
      <label htmlFor="rating">Rating</label>
      <input
        type="text"
        name="rating"
        id="rating"
        value={person.rating}
        onChange={handleRating}
      />
      <label htmlFor="status">Status</label>
      <input
        type="text"
        name="status"
        id="status"
        value={person.status}
        onChange={handleStatus}
      />
      <input type="button" value="Add" onClick={submitForm} />
    </form>
  );
}

export default Form;