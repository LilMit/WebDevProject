export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const ADD_ALL_USERS = 'ADD_ALL_USERS';
export const UPDATE_USER = 'UPDATE_USER';

export const addUserAction = (dispatch, user) => {
    dispatch({
        type: ADD_USER,
        user,
    });
};

export const deleteUserAction = (dispatch) => {
    dispatch({
        type: DELETE_USER,
    });
};

export const addAllUsersAction = (dispatch, users) => {
    dispatch({
        type: ADD_ALL_USERS,
        users
    });
};

export const updateUserAction = (dispatch, user) => {
    dispatch({
        type: UPDATE_USER,
        user
    });
};