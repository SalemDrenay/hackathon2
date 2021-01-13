import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";

function App() {
  return  (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login">
            <LoginPage />
            </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
