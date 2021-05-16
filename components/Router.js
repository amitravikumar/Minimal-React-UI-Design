import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import CallToAction1 from "./call-to-action";
import Contacts from "./Contacts";
import NotFound from "./NotFound";
import Contents from "./Contents";
import Features from "./Features";
import Forms from "./Forms";
import Footers from "./Footers";
import Headers from "./Headers";
import Pricings from "./Pricings";
import Teams from "./Teams";
import Testimonials from "./Testimonials";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/call-to-action" component={CallToAction1} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/contents" component={Contents} />
      <Route path="/features" component={Features} />
      <Route path="/forms" component={Forms} />
      <Route path="/footers" component={Footers} />
      <Route path="/headers" component={Headers} />
      <Route path="/pricings" component={Pricings} />
      <Route path="/teams" component={Teams} />
      <Route path="/testimonials" component={Testimonials} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
