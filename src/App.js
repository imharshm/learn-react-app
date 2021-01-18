import React from "react";
import { Switch, Router, Route } from "react-router-dom";
import PersonList from "./components/PersonList";
import History from "./utils/History";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <Container className="py-5">
      <Router history={History}>
        <Switch>
          <Route exact path="/Persons" component={PersonList}></Route>;
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
