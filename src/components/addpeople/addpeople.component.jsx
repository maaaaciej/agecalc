import React from "react";
import "./addpeople.styles.scss";

const AddPeople = (props) => {
  const {
    name,
    birthday,
    handleNameChange,
    handleBirtdayChange,
    handleAddPerson,
  } = props;
  console.log(props);
  return (
    <div className="addpeople">
      <div className="addpeople_inputs">
        <h4 className="addpeople_inputs_title">Name and Date of Birth</h4>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Name"
        />
        <input
          type="date"
          value={birthday}
          onChange={handleBirtdayChange}
          placeholder="Date Of Birth"
        />
        <input type="submit" onClick={handleAddPerson} value="Add Person" />
      </div>
      <div className="addpeople_choosedate">
        <h4 className="addpeople_choosedate_title">Choose Date</h4>
        <input type="date" />
      </div>
    </div>
  );
};

export default AddPeople;
