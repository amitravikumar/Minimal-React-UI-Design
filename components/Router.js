import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import CallToAction1 from "./call-to-action";
import Contacts from "./Contacts";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/call-to-action" component={CallToAction1} />
      <Route path="/contacts" component={Contacts} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
