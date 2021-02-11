
import React from 'react';
import Home from './Home';
import UserHome from './UserHome';
import Login from './Login';
import Payment from './Payment';
import './App.css';
import Register from './Register';
import Product from './Product';
import PlaceOrder from './PlaceOrder';

import{
  BrowserRouter,
  Switch,
  Route,
  Link
}
from 'react-router-dom';
class App extends React.Component {
  render(){
  return (
   <div className="App">
    <BrowserRouter>
      
      <div>
        <Switch>
          <Route path="/" exact={true}>
              <Home />
          </Route>
          <Route path="/login">
            
              <Login/>
          </Route>
          <Route path="/register">
            
              <Register/>
          </Route>
          <Route path="/userHome">            
              <UserHome/>
          </Route>
          <Route path="/product">            
              <Product/>
          </Route>
          <Route path="/placeOrder">            
              <PlaceOrder/>
          </Route>
          <Route path="/payment">            
              <Payment/>
          </Route>
          
          
          
          
          
        </Switch>
      </div>
    </BrowserRouter>
   </div>
  );
}
}
export default App;
