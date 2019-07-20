import React from "react";
import Scheduler from "./Scheduler";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="ui container">
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/calendar" exact component={Scheduler} />
            <Route path="/dashboard" exact component={Dashboard} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
