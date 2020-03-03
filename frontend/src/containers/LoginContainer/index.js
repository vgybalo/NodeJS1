import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import LoginComponent from '../../components/LoginComponent';

class index extends Component {
    render() {
        return (
            
        <Provider store={store}>
            <LoginComponent/>
       </Provider>     
           
        );
    }
}

export default index;