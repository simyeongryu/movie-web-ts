import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import TV from "./Pages/TV";
import NotFoundPage from "./Pages/NotFoundPage";
import Detail from "./Pages/Detail";
import Header from "./Components/Header";

const App = () => (
  <>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movie" component={Home} />
        <Route exact path="/tv" component={TV} />
        <Route exact path="/search" component={Search} />
        <Route path="/tv/:id" component={Detail} />
        <Route path="/movie/:id" component={Detail} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  </>
);

export default App;
