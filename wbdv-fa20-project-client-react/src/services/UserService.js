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
    // return fetch(`url/${username}`, init).then(response => response.json());
    return {
        id: '1',
        username: 'john_wick',
        password: 'john',
        firstname: 'john',
        lastname: 'wick',
        type: 'REGULAR',
        email: 'john_wick@email.com',
    }
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