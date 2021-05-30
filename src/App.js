import React from 'react';
import './App.css';
import Navbar from './components/SideBar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Reports from './pages/Reports';
import Products from './pages/Products';

import Ordercard from './pages/OrderCard/Ordercard';
import Gridlayout from './components/GridLayout/Gridlayout';

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
