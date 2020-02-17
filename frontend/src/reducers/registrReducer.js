import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from '../../src/actions/actionTypes';
import update from 'immutability-helper';


const initialState = {
    isLoading: false,
    isError: false,
    shouldRedirect: false,
    errorMessage: '',
    user: false,
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch(type){
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case LOGIN_SUCCESS:
            sessionStorage.setItem('auth', JSON.stringify(payload));
            return {
                ...state,
                user: payload,
                isLoading: false,
                shouldRedirect: true
            };
        case LOGIN_ERROR:
            return {
                ...state,
                errorMessage: payload,
                isLoading: false,
                isError: true,
            };
        default:
            return state;
    }
}