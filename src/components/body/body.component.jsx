import AddPeople from "../addpeople/addpeople.component";
import React from "react";
import PeopleDirectory from "../peopledirectory/peopledirectory.component";

import "./body.styles.scss";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = { people: [], name: "", birthday: "", date: "2020-08-10" };
  }
  handleSetDate = (date) => {
    this.setState({
      date: date.target.value,
    });
  };
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

  // handleDeletePerson = (event) => {
  //   const newArr = [...this.state.people];
  //   console.log(newArr);
  //   const personIndex = newArr.indexOf(event.target.value);
  //   console.log(personIndex);
  //   if (personIndex !== -1) {
  //     newArr.splice(personIndex, 1);
  //     this.setState({ people: newArr });
  //   }
  // };

  render() {
    return (
      <div className="body">
        <AddPeople
          handleBirtdayChange={this.handleBirthdayChange}
          handleNameChange={this.handleNameChange}
          name={this.state.name}
          birthday={this.state.birthday}
          date={this.state.date}
          handleAddPerson={this.handleAddPerson}
          handleSetDate={this.handleSetDate}
        />
        <PeopleDirectory
          people={this.state.people}
          date={this.state.date}
          // handleDeletePerson={this.handleDeletePerson}
        />
      </div>
    );
  }
}
export default Body;
