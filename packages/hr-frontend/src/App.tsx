import React, { Suspense } from "react";
import { Route, Switch } from "react-router";

import RocketSearchPage from "./pages/RocketSearchPage";


import ShoppingCartContainer from "./containers/ShoppingCartContainer";
import { useRockets } from "./rockets/redux/hooks";


const LandingPage = React.lazy(() => import("./pages/LangingPage"));

enum Routes {
  about = "/about",
  rockets = "/rockets",
  rocketDetail = "/rockets/:id",
  cart = "/cart",
}

const App: React.FC = () => {

  return (
    <React.Fragment>
      <Suspense fallback={<div style={{ height: "100vh" }} />}>
        <Switch>
          <Route
            path={Routes.rocketDetail}
            render={() => {
              return "Rocket detail page";
            }}
          />
          <Route
            path={Routes.cart}
            render={() => {
              return <ShoppingCartContainer/>;
            }}
          />
          <Route
            exact
            path={Routes.rockets}
            render={() => {
              return <RocketSearchPage />;
              //return "Rockets page";
            }}
          />
          <Route
            exact
            path="/"
            render={() => {
              return <LandingPage />;
            }}
          />
        </Switch>
      </Suspense>
    </React.Fragment>
  );
};

export default App;
