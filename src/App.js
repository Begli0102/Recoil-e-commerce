import "./App.css";
import Navbar from "./components/navbar";
import Home from "./Home";
import Cart from "./Cart";
import { Route, Switch } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/cart" render={() => <Cart />} />
        <Route  path="/" render={() => <Home />} />
      </Switch>
    </div>
  );
}

export default App;
