import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [filteredPersos, setFilteredPersons] = useState(persons);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addNumber = (e) => {
    e.preventDefault();

    let ifPerson = persons.find((person) => person.name == newName);

    if (!ifPerson) {
      let personObj = {
        id: persons.length + 1,
        name: newName,
        number: newNumber,
      };
      setPersons(persons.concat(personObj));
    } else {
      alert(`${newName} is already added to the phonebook`);
    }
    setNewName("");
    setNewNumber("");
  };

  const filterNumbers = (value) => {
    let filteredNumbers = filteredPersos.filter((person) =>
      person.name.includes(value)
    );
    value == ""
      ? setFilteredPersons(persons)
      : setFilteredPersons(filteredNumbers);
  };
  return (
    <div>
      <div>
        <h2>Phonebook</h2>
        <input onChange={(e) => filterNumbers(e.target.value)} />
      </div>
      <div>
        <h2>add new</h2>
        <form onSubmit={(e) => addNumber(e)}>
          <div>
            name:{" "}
            <input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>
          <div>
            number:
            <input
              value={newNumber}
              onChange={(e) => setNewNumber(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </div>
      <div>
        <h2>Numbers</h2>
        {filteredPersos.map((person) => (
          <div key={person.id}>
            <p>
              {person.name}: {person.number}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
