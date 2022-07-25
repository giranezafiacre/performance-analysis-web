import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Signup from './pages/signup';
import ErrorPage from './errorPage';
import PrivateRoute from './privateRoute';
import AppContext from './appContext';
import Correlation from './pages/correlation';
import Upload from './pages/upload';
import LandingPage from './pages/landingPage';
import FileDashboard from './pages/admin/fileDashbord';
import Overview from './pages/overview';
import Gender from './pages/gender';
import Teacher from './pages/teacher';
import Health from './pages/health';
import CorrelationResult from './pages/correlation/correlationResult';
import Edit from './pages/upload/Edit';
import Report from './pages/report';

function App() {
  return (
    <AppContext>
      <div className="App">
        <Router>
          <Switch>
          {/* /correlations */}
            <Route path='/report' component={Report} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/upload' component={Upload} />
            <Route path='/edit' component={Edit} />
            <Route path='/files' component={FileDashboard} />
            <Route path='/correlations' component={Correlation} />
            <Route path='/overview' component={Overview} />
            <Route path='/gender' component={Gender} />
            <Route path='/teacher' component={Teacher} />
            <Route path='/health' component={Health} />
            <Route path='/correlations-output' component={CorrelationResult} />
            <PrivateRoute path='/' component={LandingPage} />
            <Route component={ErrorPage} />
          </Switch>
        </Router>
      </div>
    </AppContext>
  );
}

export default App;
