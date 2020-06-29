import React from "react";
import { Nav } from "./styles/Header/Nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Commission from "./views/Commission";
import Status from "./views/Status";
import Admin from "./views/Admin";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/commission" render={(props) => <Commission />} />
          <Route path="/status" render={(props) => <Status />} />
          <Route path="/admin" render={(props) => <Admin />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
