import {ADD_ALL_USERS, ADD_USER, DELETE_USER, UPDATE_USER} from '../actions/userAction';

let sessionState = localStorage.getItem('userReducer');

if (!sessionState) {
    sessionState = {};
} else {
    sessionState = JSON.parse(sessionState);
}

const logoutState = {
    _id: '',
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    type: 'ANONYMOUS',
    email: '',
    users: [],
    isLoggedIn: false,
};

const intitialState = {
    ...logoutState,
    ...sessionState,
};

export const userReducer = (state = intitialState, action) => {
    let newState = state;
    let user;
    switch (action.type) {
        case ADD_USER:
            user = action.user;
            newState = {
                ...state,
                _id: user._id,
                username: user.username,
                password: user.password,
                firstname: user.firstname,
                lastname: user.lastname,
                type: user.type,
                email: user.email,
                isLoggedIn: true,
            };
            break;
        case DELETE_USER:
            newState = {
                ...logoutState,
            };
            break;
        case ADD_ALL_USERS:
            user = action.user;
            newState = {
                ...state,
                users: action.users,
            }
            break;
        case UPDATE_USER:
            user = action.user;
            newState = {
                ...state,
                _id: user._id,
                username: user.username,
                password: user.password,
                firstname: user.firstname,
                lastname: user.lastname,
                type: user.type,
                email: user.email,
            };
            break;
        default:
            return state;
    }

    localStorage.setItem('userReducer', JSON.stringify(newState));
    return newState;

};
