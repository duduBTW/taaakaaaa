import React from "react";
import { Nav } from "./styles/Header/Nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Commission from "./views/Commission";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/commission" render={(props) => <Commission />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
