import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Signup from './pages/signup';
import ErrorPage from './errorPage';
import PrivateRoute from './privateRoute';
import AppContext from './appContext';
// import Admin from './pages/admin';
import Upload from './pages/upload';
import LandingPage from './pages/landingPage';

function App() {
  return (
    <AppContext>
      <div className="App">
        <Router>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/upload' component={Upload} />
            <PrivateRoute path='/' component={LandingPage} />
            <Route component={ErrorPage} />
          </Switch>
        </Router>
      </div>
    </AppContext>
  );
}

export default App;
