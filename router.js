import React from 'react';
import { Router, Route} from 'react-router';
// Pages
import Home from './App';
import SomeComponent from './components/SomeComponent';

var browserHistory = Router.browserHistory;

// Layouts
/*import MainLayout from './components/main-layout';
import SearchLayout from './components/search-layout';*/





export default (
 <Router history={browserHistory}>

        <Route path="/" component={Home} />

        <Route path="some" component={SomeComponent} />





</Router>
);