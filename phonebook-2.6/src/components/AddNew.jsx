import React from 'react'

const AddNew = ({newName, setNewName, newNumber, setNewNumber, persons, setPersons, setFilteredPersons}) => {
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
          setFilteredPersons(persons.concat(personObj))
        } else {
          alert(`${newName} is already added to the phonebook`);
        }
        setNewName("");
        setNewNumber("");
      };
  return (
    <div>
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
  )
}

export default AddNew