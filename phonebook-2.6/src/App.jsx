import { useState } from "react";
import Numbers from "./components/Numbers";
import Phonebook from "./components/Phonebook";
import AddNew from "./components/AddNew";

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

  return (
    <div>
      <Phonebook
        persons={persons}
        filteredPersos={filteredPersos}
        setFilteredPersons={setFilteredPersons}
      />
      <div>
        <h2>add new</h2>
        <AddNew
          newName={newName}
          setNewName={setNewName}
          newNumber={newNumber}
          setNewNumber={setNewNumber}
          persons={persons}
          setFilteredPersons={setFilteredPersons}
          setPersons={setPersons}
        />
      </div>
      <div>
        <Numbers persons={filteredPersos} />
      </div>
    </div>
  );
};

export default App;
