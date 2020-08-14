import React from "react";

import "./peopledirectory.styles.scss";

const PeopleDirectory = (props) => {
  const { people, date } = props;

  const handleCalculateAge = (dob, date) => {
    console.log(date);
    console.log(dob);
    let timeDifference = (new Date(date) - new Date(dob)) / 1000;
    let minus = "";
    console.log(timeDifference);

    if (timeDifference < 0) {
      timeDifference = Math.abs(timeDifference);
      minus = "-";
    }
    const secondsInYear = 31556952;
    const secondsInMonth = 2628000;
    const secondsInDay = 86400;

    let years = Math.floor(timeDifference / secondsInYear);
    let months = Math.floor((timeDifference % secondsInYear) / secondsInMonth);
    let days = Math.floor(
      ((timeDifference % secondsInYear) % secondsInMonth) / secondsInDay
    );

    return `${minus}${years} years, ${months} months and ${days} days`;
  };
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
              <td>{handleCalculateAge(person.birthday, date)}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default PeopleDirectory;
