import React from "react";

import "./peopledirectory.styles.scss";

const PeopleDirectory = (props) => {
  const { people } = props;
  return (
    <div className="peopledirectory">
      <div className="peopledirectory_table">
        <table>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Age</th>
          </tr>
          {people.map((person) => (
            <tr key={person.birthday}>
              <td>{person.name}</td>
              <td>{person.birthday}</td>
              <td>69 years old</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default PeopleDirectory;
