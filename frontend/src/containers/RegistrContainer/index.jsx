import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import RegistrComponent from '../../components/RegistrComponent';

class index extends Component {
    render() {
        return (
            
        <Provider store={store}>
            <RegistrComponent/>
       </Provider>     
           
        );
    }
}

export default index;