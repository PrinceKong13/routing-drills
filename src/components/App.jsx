import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Films from "./Films";
import People from "./People";
import Home from "./Home";
import FilmPage from "./FilmPage";
import PersonPage from "./PersonPage";

const App = () => {
  return (
    <Router>
      <Fragment>
        <button className="btn">
          <Link to="/">Home</Link>
        </button>
        <button className="btn">
          <Link to="/Films">Films</Link>
        </button>
        <button className="btn">
          <Link to="/People">People</Link>
        </button>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Films" component={Films} />
          <Route exact path="/People" component={People} />
          <Route path="/Films/:id" component={FilmPage} />
          <Route path="/People/:id" component={PersonPage} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
