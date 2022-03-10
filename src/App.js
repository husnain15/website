import "./App.css";
import Navbar from "./componentes/Navbar";
import Home from "./componentes/Home";
import { Switch, Route } from "react-router-dom";
import Products from "./componentes/Products";
import Product from "./componentes/Product";
import Cart from "./componentes/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </>
  );
}

export default App;
