import React from "react";
import "./addpeople.styles.scss";

const AddPeople = () => {
  return (
    <div className="addpeople">
      <div className="addpeople_inputs">
        <h4 className="addpeople_inputs_title">Name and Date of Birth</h4>
        <input type="text" placeholder="Name" />
        <input type="date" placeholder="Date Of Birth" />
      </div>
      <div className="addpeople_choosedate">
        <h4 className="addpeople_choosedate_title">Choose Date</h4>
        <input type="date" />
      </div>
    </div>
  );
};

export default AddPeople;
