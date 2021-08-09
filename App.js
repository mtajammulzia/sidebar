import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contactus from "./pages/Contactus";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/products" exact component={Products}></Route>
          <Route path="/contact" exact component={Contactus}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
