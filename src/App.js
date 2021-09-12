import './App.css';
import './scss/style.scss';
import './scss/_custom.scss';
import {Suspense} from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import {HashRouter, Route, Switch} from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";

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
                <Route path="/" name="Home" exact >
                    <DefaultLayout/>
                </Route>
            </Switch>
          </Suspense>
      </HashRouter>
  );
}

export default App;
