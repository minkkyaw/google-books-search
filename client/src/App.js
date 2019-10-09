import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/books/books.component";
import SavedBooks from "./pages/saved-books/saved-books.component";
import NoMatch from "./pages/NoMatch";
import NavBar from "./components/nav-bar/nav-bar-component";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/saved-books" component={SavedBooks} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
