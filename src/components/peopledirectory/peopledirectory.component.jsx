import React from "react";

import "./peopledirectory.styles.scss";

const PeopleDirectory = (props) => {
  const { people } = props;
  return (
    <div className="peopledirectory">
      {people.map((person) => (
        <p>
          {person.name} {person.birthday}
        </p>
      ))}
    </div>
  );
};

export default PeopleDirectory;
