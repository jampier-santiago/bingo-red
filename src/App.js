import { Switch, Route, BrowserRouter } from "react-router-dom";

// Pages
import Login from "./pages/Login/Login";
import Perfil from "./pages/Perfil/Perfil";
import ListOfFigures from "./pages/ListOfFigures/ListOfFigures";
import NewFigure from "./pages/NewFigure/NewFigure";
import EditFigure from "./pages/EditFigure/EditFigure";
import Dashboard from "./pages/Dashboard/Dashboard";
import EditModality from "./pages/EditModality/EditModality";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/perfil" component={Perfil} />
          <Route exact path="/figuras" component={ListOfFigures} />
          <Route path="/nueva-figura" component={NewFigure} />
          <Route path="/figuras/:id">
            <EditFigure />
          </Route>
          <Route path="/modalidades/:id">
            <EditModality />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
