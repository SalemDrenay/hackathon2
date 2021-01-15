import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import Join from "./components/Join";
import Chat from "./components/Chat";

function App() {
  return  (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LoginPage />
            </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/join" component={Join} />
          <Route path="/chat" component={Chat} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
