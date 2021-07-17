import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/home' exact component={Home} />
        <Route path='/sign-up' exact component={Signup} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
