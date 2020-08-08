import React from "react";
import "./App.css";

import Body from "./components/body/body.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      {/* <PeopleDirectory /> */}
    </div>
  );
}

export default App;
