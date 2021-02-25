import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

const DefaultLayout = React.lazy(() => import("./containers/DefaultLayout"));
const CMSLayout = React.lazy(() => import("./containers/CMSLayout"));
const loading = () => (
  <div className="animated fadeIn pt-3 text-center"> Loading... </div>
);

class App extends Component {
  render() {
    return (
      <Router>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Route
              path="/cms"
              name="CMS Page"
              render={props => <CMSLayout {...props} />}
            />
            <Route
              path="/"
              name="DefaultLayout Page"
              render={props => <DefaultLayout {...props} />}
            />
          </Switch>{" "}
        </React.Suspense>{" "}
      </Router>
    );
  }
}

export default App;
