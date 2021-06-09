import React, { useState, useEffect } from "react";

function FormInput() {
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
  const [people, setPeople] = useState([]);

  const handler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(value, name);
    setPerson({ ...person, [name]: value });
  };

  const clickHanlder = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ firstName: "", email: "", age: "" });
    }
  };
  return (
    <>
      <article>
        <form action="/home" className="form" style={{ margin: "5rem" }}>
          <div className="container">
            <label htmlFor="firstName">Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={handler}
            ></input>
            <p>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={person.email}
                onChange={handler}
              ></input>
            </p>

            <label htmlFor="age">Age</label>
            <input
              type="text"
              id="age"
              name="age"
              value={person.age}
              onChange={handler}
            ></input>
          </div>

          <button type="submit" onClick={clickHanlder}>
            Submit
          </button>
        </form>
      </article>
      {people.map((person) => {
        return (
          <div key={person.id}>
            <h3>{person.firstName}</h3>
            <h4>{person.email}</h4>
            <h4>{person.age}</h4>
          </div>
        );
      })}
    </>
  );
}

export default FormInput;
