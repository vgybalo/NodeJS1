import axios from 'axios';
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from './actionTypes';


const loginSuccess = data => ({
    type: LOGIN_SUCCESS,
    payload: {id: data.id, login: data.login}
});

const loginError = data => ({
    type: LOGIN_ERROR,
    payload: data
});

export const login = form => async dispatch => {
    try {
        const res = await axios.post('/registr', form);

        if (!res.data || res.data === false) {
            dispatch(loginError('Неправильный логин или пароль'));
        } else {
            dispatch(loginSuccess(res.data));
        }
    } catch (e) {
        dispatch(loginError(e.response.data));
    }
};

c