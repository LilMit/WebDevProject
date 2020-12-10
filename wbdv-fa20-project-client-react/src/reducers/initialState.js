const initialState = {};
const ADD_HISTORY = 'ADD_HISTORY';

export const reducer = (state = initialState, action) => {
    let newState;
    switch (action) {
        case ADD_HISTORY:
            newState = {
                ...initialState,
                history: action.history,
            };
            return newState;
        default:
            return state;
    }
};
