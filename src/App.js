import React from "react";
import './App.css';
import './scss/style.scss';
import {Suspense} from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import {HashRouter, Route, Switch} from "react-router-dom";

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'));

const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"/>
    </div>
);

function App() {
  return (
      <HashRouter>
          <Suspense fallback={loading}>
            <Switch>
                <Route path="/" name="Home" render={(props) => <DefaultLayout {...props} />} >
                </Route>
            </Switch>
          </Suspense>
      </HashRouter>
  );
}

export default App;
