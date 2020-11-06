import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import WelcomePage from "../Components/WelcomePage/WelcomePage";
import SalesAnalysis from "../Components/Sales Analysis/SalesAnalysis";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route path="/SalesAnalysis" component={SalesAnalysis} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
