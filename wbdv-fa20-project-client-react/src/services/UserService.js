const url = '';

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
    return fetch(`url/${username}`, init).then(response => response.json());
}

export const addUser = (user) => {
    const init = { 
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(user)
    };
    return fetch(url, init).then(response => response.json());
}

export const getUser = (username) => {
    const init = { 
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        },
    };
    return fetch(`url/${username}`, init).then(response => response.json());
}

const defaultExport = {
    validateUser,
    addUser,
    getUser 
};

export default defaultExport;