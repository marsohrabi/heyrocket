import React, { Suspense } from "react";
import { Route, Switch } from "react-router";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import { useRockets } from "./rockets/redux/hooks";

const LandingPage = React.lazy(() => import("./pages/LangingPage"));

enum Routes {
  rocketDetail = "/rockets/:id",
  cart = "/cart",
}

const App: React.FC = () => {
  useRockets();

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
              return <ShoppingCartPage />;
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
