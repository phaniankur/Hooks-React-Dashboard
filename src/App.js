import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Reports from './pages/Reports';
import Products from './pages/Products';
import OrderTab from './components/Order-Tab/OrderTab';
import Tracker from './pages/Tracker/Tracker';
import Ordercard from './components/OrderCard/Ordercard';
import Gridlayout from './pages/Gridlayout';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/grid' exact component={Gridlayout} />
          <Route path='/orders' exact component={Ordercard} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
