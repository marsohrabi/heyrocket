import React, { Suspense } from "react";
import { useDispatch } from "react-redux";
import { Route, RouteComponentProps, Switch } from "react-router";
import { compose } from "redux";

const LandingPage = React.lazy(() => import("./pages/LangingPage"));

// type Routes = "/rockets/:id" | "/cart" | "/rockets" | "/";

enum Routes {
  rocketDetail ="/rockets/:id",
  cart = "/cart"
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
            path="/cart"
            render={() => {
              return "Shopping cart";
            }}
          />
          <Route
            exact
            path="/rockets"
            render={() => {
              return "Rockets page";
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
