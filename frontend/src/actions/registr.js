import axios from 'axios';
//import PropTypes from 'prop-types';
import { Router, Switch, Route, Redirect} from 'react-router-dom';
import ReactDOM from 'react-dom';
import {history} from "../router.js";
import {
    REGISTR_REQUEST,
    REGISTR_SUCCESS,
    REGISTR_ERROR
} from './actionTypes';


const loginSuccess = data => ({
    type: REGISTR_SUCCESS,
    payload: {login: data.login, pwd: data.pwd},
    });

const loginError = data => ({
    type: REGISTR_ERROR,
    payload: data
});
 
//export const registr = form => async dispatch => {
    export const registr = form => async dispatch => {
        //let history = useHistory();
    try {
        console.log(form);
        const res = await axios.post('/registr', form).then(data => {
            console.log(data);
            return data
        }).catch(err=>console.log(err));
            console.log('12345')
        if (!res.data || res.data === false) {
            dispatch(loginError('Неправильный логин или пароль'));
        } else {
            dispatch(loginSuccess(res.data));
            history.push("/");
        }
    } catch (e) {
        console.log('12346')
        dispatch(loginError('invalid login or pwd'));
    }
};

    export const login = form => async dispatch => {
        //let history = useHistory();
    try {
        console.log(form);
        const res = await axios.post('/login', form).then(data => {
            console.log(data);
            return data
        }).catch(err=>console.log(err));
            console.log('12345')
        if (!res.data || res.data === false) {
            dispatch(loginError('Неправильный логин или пароль'));
        } else {
            dispatch(loginSuccess(res.data));
            history.push("/");
        }
    } catch (e) {
        console.log('12346')
        dispatch(loginError('invalid login or pwd'));
    }
};
