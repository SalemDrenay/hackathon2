import { Switch, Route } from "react-router-dom";
import Chat from "./components/Chat";
import Join from "./components/Join";

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/chat' component={Chat} />
        <Route exact path="/join" component={Join} />
      </Switch>
    </div>
  );
}

export default App;
