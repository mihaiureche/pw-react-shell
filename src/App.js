import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider, useSelector } from 'react-redux';
import './App.css';

import store from './store';
import Index from './components/Index/Index';
import MicroFrontend from './components/MicroFrontend/MicroFrontend';

const {
  REACT_APP_CART_HOST: cartHost,
} = process.env;

function CartMicro(products) {
  return <MicroFrontend host={cartHost} name="Cart" data={products} />;
}

const Header = () => {
  return (
    <>
      <div className="banner">
        <img width="500" src="http://d24wuq6o951i2g.cloudfront.net/img/events/id/457/457837366/assets/5238b7bd388d6c55a4243cbbd8786c3b.PW2020-Logo-Web_2-02.png" alt="Programmer's Week" />
      </div>
      <div>
        <Link to={'/'} className={'App-link'}>Products</Link> | 
        <Link to={'/cart'} className={'App-link'}>Cart</Link>
      </div>
    </>
  );
}

const Cart = () => {
  const products = useSelector(
    (state) => state.cart.products
  );

  return (
    <>{CartMicro(products)}</>
  )
}

const App = () => {
  return (
    <div className="App">
        <Provider store={store}>
          <Router>
            <>
              <Header />
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/cart" component={Cart} />
              </Switch>
            </>
          </Router>
        </Provider>
    </div>
  );
}

export default App;
