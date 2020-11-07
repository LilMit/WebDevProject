import { ADD_USER, DELETE_USER, ADD_ALL_USERS, UPDATE_USER } from '../actions/userAction';

const intitialState = {
    id: '',
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    type: 'ANONYMOUS',
    email: '',
    users: [],
    isLoggedIn: false,
};

export const userReducer = (state = intitialState, action) => {
    let newState;
    let user;
    switch(action.type) {
        case ADD_USER:
            user = action.user;
            newState = {
                ...state,
                id: user.id,
                username: user.username,
                password: user.password,
                firstname: user.firstname,
                lastname: user.lastname,
                type: user.type,
                email: user.email,
                isLoggedIn: true,
            };
            return newState;
        case DELETE_USER:
            newState = {
                ...intitialState,
            };
            return newState;
        case ADD_ALL_USERS:
            user = action.user;
            newState = {
                ...state,
                users: action.users,
            }
            return newState;
        case UPDATE_USER:
            user = action.user;
            newState = {
                ...state,
                id: user.id,
                username: user.username,
                password: user.password,
                firstname: user.firstname,
                lastname: user.lastname,
                type: user.type,
                email: user.email,
            };
            return newState;
        default:
            return state;
    }
};
