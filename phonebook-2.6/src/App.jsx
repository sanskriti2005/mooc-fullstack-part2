import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ id: 0, name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addNumber = (e) => {
    e.preventDefault();

    let ifPerson = persons.find((person) => person.name == newName);

    if (!ifPerson) {
      let personObj = { id: persons.length + 1, name: newName };
      setPersons(persons.concat(personObj)); 
    } else {
      alert(`${newName} is already added to the phonebook`)
    }
    setNewName("");
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={(e) => addNumber(e)}>
        <div>
          name:{" "}
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.id}>{person.name}</p>
      ))}
    </div>
  );
};

export default App;
