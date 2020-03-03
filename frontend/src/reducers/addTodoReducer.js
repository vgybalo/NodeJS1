import {
    ADDTODO_LOADING,
    ADDTODO_SUCCESS,
    ADDTODO_ERROR
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
        case  ADDTODO_LOADING:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case ADDTODO_SUCCESS:
            sessionStorage.setItem('auth', JSON.stringify(payload));
            return {
                ...state,
                user: payload,
                isLoading: false,
                shouldRedirect: true
            };
        case ADDTODO_ERROR:
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