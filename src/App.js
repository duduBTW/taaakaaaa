import React from "react";
import { Nav } from "./styles/Header/Nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Commission from "./views/Commission";
import { OwO } from "./views/idk";
import { Title } from "./views/idk";
import { Content } from "./views/idk";
import { CoisaCinza } from "./views/idk";
import { RobotoBold } from "./views/idk";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <OwO>
        <Title>Full scene</Title>
        <Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget dolor eu enim viverra sodales. Sed efficitur mauris arcu, vel condimentum diam egestas eu. Praesent in diam justo. </Content>
      </OwO>
      <CoisaCinza />
      {/* <BrowserRouter>
        <Nav />
         <Switch>
          <Route path="/commission" render={(props) => <Commission />} />
        </Switch> 
      </BrowserRouter> */}
    </div>
  );
};

export default App;
