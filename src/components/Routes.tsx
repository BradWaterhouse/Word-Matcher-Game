import * as React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { Spinner } from "./Spinner";
import "./../assets/scss/App.scss";

const Game = React.lazy(
  (): Promise<any> => import(/* webpackChunkName: "home" */ "./Game/Game")
);

const Routes = (): Router => {
  return (
    <Router>
      <React.Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact={true} path="/" component={Game} />
        </Switch>
      </React.Suspense>
    </Router>
  );
};

export default Routes;
