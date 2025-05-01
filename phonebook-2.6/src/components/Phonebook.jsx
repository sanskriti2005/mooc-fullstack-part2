import React from "react";

const Phonebook = ({ persons, filteredPersos, setFilteredPersons }) => {
  let filterNumbers = (value) => {
    let filteredNumbers = filteredPersos.filter((person) =>
      person.name.includes(value)
    );
    value == ""
      ? setFilteredPersons(persons)
      : setFilteredPersons(filteredNumbers);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <input onChange={(e) => filterNumbers(e.target.value)} />
    </div>
  );
};

export default Phonebook;
