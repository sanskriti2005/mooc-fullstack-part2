import React from "react";

const Numbers = ({ persons }) => {
  return <div>
    <h2>Numbers</h2>
        {persons.map((person) => (
          <div key={person.id}>
            <p>
              {person.name}: {person.number}
            </p>
          </div>
        ))}
  </div>;
};

export default Numbers;
