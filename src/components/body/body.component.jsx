import AddPeople from "../addpeople/addpeople.component";
import React from "react";
import PeopleDirectory from "../peopledirectory/peopledirectory.component";

import "./body.styles.scss";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = { people: [], name: "", birthday: "" };
  }
  handleAddPerson = (event) => {
    event.preventDefault();
    this.setState({
      people: [
        ...this.state.people,
        { name: this.state.name, birthday: this.state.birthday },
      ],
      name: "",
      birthday: "",
    });
  };
  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleBirthdayChange = (event) => {
    this.setState({ birthday: event.target.value });
  };
  render() {
    return (
      <div className="body">
        <AddPeople
          handleBirtdayChange={this.handleBirthdayChange}
          handleNameChange={this.handleNameChange}
          name={this.state.name}
          birthday={this.state.birthday}
          handleAddPerson={this.handleAddPerson}
        />
        <PeopleDirectory people={this.state.people} />
      </div>
    );
  }
}

export default Body;
