const localUsersURL = 'http://localhost:4000/api/users';
const remoteUsersURL = 'https://tranquil-waters-97142.herokuapp.com/api/users';

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
    return fetch(`${remoteUsersURL}/validate`, init).then(response => response.json());
}

export const addUser = (user) => {
    const init = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(user)
    };
    return fetch(`${remoteUsersURL}`, init).then(response => response.json());
}

export const getUser = (username) => {
    const init = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        },
    };
    return fetch(`${remoteUsersURL}/${username}`, init).then(response => response.json());
}

export const updateUser = (user_id, user) => {
    const init = {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(user),
    };
    return fetch(`${remoteUsersURL}/${user_id}`, init).then(response => response.json());
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
    return fetch(`${remoteUsersURL}/${user_id}/role`, init).then(response => response.json());
};

export const getUserById = (id) => {
    const init = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        },
    };
    return fetch(`${remoteUsersURL}/${id}`, init).then(response => response.json());
}

const getAllUsers = () => {
    const init = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        },
    };
    return fetch(`${remoteUsersURL}`, init).then(response => response.json());
}

const deleteUser = (userToDelete) => {
    const init = {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
        },
    };
    return fetch(`${remoteUsersURL}/${userToDelete}`, init).then(response => response.json());
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
