import React, { Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Route, RouteComponentProps, Switch } from 'react-router';
import { compose } from 'redux';

const LandingPage = React.lazy(() => import("./pages/LangingPage"));

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<div style={{ height: "100vh" }} />}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <LandingPage />;
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
            path="/rockets/:id"
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
        </Switch>
      </Suspense>
    </React.Fragment>

  );
}

export default App;
