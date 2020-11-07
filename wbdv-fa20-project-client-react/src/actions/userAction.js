export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const ADD_ALL_USERS = 'ADD_ALL_USERS';
export const UPDATE_USER = 'UPDATE_USER';

export const addUserDispatch = (dispatch, user) => {
    dispatch({
        type: ADD_USER,
        user,
    });
};

export const deleteUserDispatch = (dispatch) => {
    dispatch({
        type: DELETE_USER,
    });
};

export const addAllUsersDispatch = (dispatch, users) => {
    dispatch({
        type: ADD_ALL_USERS,
        users
    });
};

export const updateUser = (dispatch, user) => {
    dispatch({
        type: UPDATE_USER,
        user
    });
};