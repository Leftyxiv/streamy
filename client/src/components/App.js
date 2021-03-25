import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from '../history';
import StreamList from "./streams/StreamList/StreamList";
import StreamCreate from "./streams/StreamCreate/StreamCreate";
import StreamDelete from "./streams/StreamDelete/StreamDelete";
import StreamEdit from "./streams/StreamEdit/StreamEdit";
import StreamShow from "./streams/StreamShow/StreamShow";
import Header from "./header/Header";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        <Switch>
        <Route exact path="/" component={StreamList} />
        <Route path="/streams/new" component={StreamCreate} />
        <Route path="/streams/delete/:id" component={StreamDelete} />
        <Route path="/streams/edit/:id" component={StreamEdit} />
        <Route path="/streams/:id" component={StreamShow} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
