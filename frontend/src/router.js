import React from 'react';
import { Router, Switch, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory'
// Pages
import Home from './App';
//import SomeComponent from './components/SomeComponent';
import RegistrContainer from './containers/RegistrContainer';
import LoginContainer from './containers/LoginContainer';

export const history = createBrowserHistory();
// Layouts
/*import MainLayout from './components/main-layout';
import SearchLayout from './components/search-layout';*/
export default (
   <Router history={history}>
                <Route exact path="/registr" component={RegistrContainer} />
                <Route exact path="/login" component={LoginContainer} />
                <Route exact path="/" component={Home} />
    </Router>

);