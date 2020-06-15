import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Films from "./Films";
import People from "./People";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/Films">Films</Link>
      </button>
      <button>
        <Link to="/People">People</Link>
      </button>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Films" component={Films} />
        <Route path="/People" component={People} />
      </Switch>
    </Router>
  );
};

export default App;
