const localUsersURL = 'http://localhost:4000/api/users';

export const validateUser = (username, password) => {
    const body = {
        username: username,
        password: password
    };
    const init = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(body)
    };
    return fetch(`${localUsersURL}/validate`, init).then(response => response.json());
}

export const addUser = (user) => {
    const init = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(user)
    };
    return fetch(`${localUsersURL}`, init).then(response => response.json());
}

export const getUser = (username) => {
    const init = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        },
    };
    return fetch(`${localUsersURL}/${username}`, init).then(response => response.json());
}

export const updateUser = (user_id, user) => {
    const init = {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(user),
    };
    return fetch(`${localUsersURL}/${user_id}`, init).then(response => response.json());
}

export const updateUserRole = (requestinUserId, user_id, updatedRole) => {
    const user = {
        requestingUser: requestinUserId,
        role: updatedRole,
    };
    const init = {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(user),
    };
    return fetch(`${localUsersURL}/${user_id}/role`, init).then(response => response.json());
};

export const getUserById = (id) => {
    const init = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        },
    };
    return fetch(`${localUsersURL}/${id}`, init).then(response => response.json());
}

const getAllUsers = (requestUser_id) => {
    const init = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        },
    };
    console.log(requestUser_id);
    return fetch(`${localUsersURL}/all/${requestUser_id}`, init).then(response => response.json());
}

const deleteUser = (userToDelete) => {
    const init = {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
        },
    };
    return fetch(`${localUsersURL}/${userToDelete}`, init).then(response => response.json());
}

const defaultExport = {
    validateUser,
    addUser,
    getUser,
    updateUser,
    getUserById,
    getAllUsers,
    deleteUser,
    updateUserRole,
};

export default defaultExport;
