import React from "react";
import { Switch, Router, Route } from "react-router-dom";
import PersonList from "./components/PersonList";
import ThemeSwitcher from "./components/ThemeSwitcher";
import History from "./utils/History";

const App = () => {
  return (
    <Router history={History}>
      <Switch>
        <Route exact path="/Persons" component={PersonList}></Route>;
        <Route path="/" component={ThemeSwitcher}></Route>
      </Switch>
    </Router>
  );
};

export default App;
