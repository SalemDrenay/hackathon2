import { Switch, Route } from "react-router-dom";
import Chat from "./components/Chat";

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/chat' component={Chat} />
      </Switch>
    </div>
  );
}

export default App;
