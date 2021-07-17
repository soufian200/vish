import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";

function App() {
  return "welcome to lavish"
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/home' exact component={Home} />
        <Route path='/sign-up' exact component={Signup} />
        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
