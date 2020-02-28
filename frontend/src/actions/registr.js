import axios from 'axios';
//import PropTypes from 'prop-types';
import { Router, Switch, Route, Redirect} from 'react-router-dom';
import ReactDOM from 'react-dom';
import {
    REGISTR_REQUEST,
    REGISTR_SUCCESS,
    REGISTR_ERROR
} from './actionTypes';


const loginSuccess = data => ({
    type: REGISTR_SUCCESS,
    payload: {login: data.login, pwd: data.pwd}
});

const loginError = data => ({
    type: REGISTR_ERROR,
    payload: data
});
 
//export const registr = form => async dispatch => {
    
export function registr(payload) {
  return (dispatch) => {

        dispatch({
        type: REGISTR_REQUEST
        })

        setTimeout(() => {
        dispatch({
            type: REGISTR_SUCCESS,
            payload: {
            name: payload.name,
            isAuthenticated: true
            }
        })
        },2000)
    }
}
