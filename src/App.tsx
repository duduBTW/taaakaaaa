import React from "react";
import { Nav } from "./styles/Header/Nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Commission from "./views/Commission";
import Portfolio from "./views/Portfolio";
import Status from "./views/Status";
import Admin from "./views/Admin";
import Teste from "./views/Teste";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route
            exact
            path="/commission/:id"
            render={(props) => <div> {props.match.params.id} </div>}
          />
          <Route exact path="/commission" render={(props) => <Commission />} />
          <Route exact path="/portfolio" render={(props) => <Portfolio />} />
          <Route path="/status" render={(props) => <Status />} />
          <Route path="/admin" render={(props) => <Admin />} />
          <Route path="/teste" render={(props) => <Teste />} />
        </Switch>
      </BrowserRouter>
      {/* </Switch> 
      </BrowserRouter> */}
    </div>
  );
};

export default App;
