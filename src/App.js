import React from "react";
import { Switch, Router, Route } from "react-router-dom";
import PersonList from "./components/PersonList";
import History from "./utils/History";

const App = () => {
  return (
    <Router history={History}>
      <Switch>
        <Route exact path="/Persons" component={PersonList}></Route>;
      </Switch>
    </Router>
  );
};

export default App;
