import React from "react";
import Scheduler from "./Scheduler";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="ui container">
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/calendar" exact component={Scheduler} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
