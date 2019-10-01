import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "./pages/Main";
import Menu from "./components/Menu";
import Jogo1 from "./pages/Jogo1";
import Jogo2 from "./pages/Jogo2";
import Jogo3 from "./pages/Jogo3";
import Jogo4 from "./pages/Jogo4";
import NotFound from "./pages/NotFound";

const Routes = () => (
  <BrowserRouter>
    <Route component={Menu} />
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/GtaQuadra" component={Jogo1} />
      <Route path="/Muiiy" component={Jogo2} />
      <Route path="/Mechas-and-Punishment" component={Jogo3} />
      <Route path="/Imersion" component={Jogo4} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
