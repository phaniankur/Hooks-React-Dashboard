import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Orders from './pages/Orders';
import Reports from './pages/Reports';
import Products from './pages/Products';
import OrderTab from './components/Order-Tab/OrderTab';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/orders' exact component={OrderTab} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
