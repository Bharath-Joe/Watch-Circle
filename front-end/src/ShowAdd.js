import React, { useState } from "react";

function Form(props) {
  const [person, setPerson] = useState({
    name: "",
    job: "",
    genre: "",
    episode: "",
    rating: "",
    status: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "job") 
      setPerson(
        { name: person["name"], job: value }
      );

    else if(name === "genre")
        setPerson(
            {name: person["name"], genre: value}
        );
    else if(name === "episode")
        setPerson(
            {name: person["name"], episode: value}
        )
    else if(name === "rating")
        setPerson(
            {name: person["name"], rating: value}
        )
    else if(name === "status")
        setPerson(
            {name: person["name"], status: value}
        )
    else 
      setPerson(
        {name: value, job: person["job"]});

  }

  function submitForm() {
    props.handleSubmit(person);
    setPerson({ name: "", job: "", genre: "", episode: "", rating: "", status: ""});
  }

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={person.name}
        onChange={handleChange}
      />
      <label htmlFor="job">Job</label>
      <input
        type="text"
        name="job"
        id="job"
        value={person.job}
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
        onChange={handleChange}
      />
      <label htmlFor="rating">Rating</label>
      <input
        type="text"
        name="rating"
        id="rating"
        value={person.rating}
        onChange={handleChange}
      />
      <label htmlFor="status">Status</label>
      <input
        type="text"
        name="status"
        id="status"
        value={person.status}
        onChange={handleChange}
      />
      <input type="button" value="Add" onClick={submitForm} />
    </form>
  );
}

export default Form;