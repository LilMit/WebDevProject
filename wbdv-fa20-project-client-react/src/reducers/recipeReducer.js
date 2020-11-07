const date = new Date().toDateString();
const initialState = {
    recipies: [
        {
            id: '1',
            title: 'Title 1',
            updatedAt: date,
            description: 'Random descriptions to test a few scenarios.',
            ownedBy: 'John_wick',
        },
        {
            id: '1',
            title: 'Title 2',
            updatedAt: date,
            description: 'Random descriptions to test a few scenarios',
            ownedBy: 'John_wick',
        },
        {
            id: '1',
            title: 'Title 3',
            updatedAt: date,
            description: 'Random descriptions to test a few scenarios. Random descriptions to test a few scenarios. Random descriptions to test a few scenarios. Random descriptions to test a few scenarios. Random descriptions to test a few scenarios. Random descriptions to test a few scenarios',
            ownedBy: 'John_wick',
        },
        {
            id: '1',
            title: 'Title 4',
            updatedAt: date,
            description: 'Random descriptions to test a few scenarios',
            ownedBy: 'John_wick',
        },
        {
            id: '1',
            title: 'Title 5',
            updatedAt: date,
            description: 'Random descriptions to test a few scenarios',
            ownedBy: 'John_wick',
        },
        {
            id: '1',
            title: 'Title 6',
            updatedAt: date,
            description: 'Random descriptions to test a few scenarios',
            ownedBy: 'John_wick',
        },
        {
            id: '1',
            title: 'Title 7',
            updatedAt: date,
            description: 'Random descriptions to test a few scenarios',
            ownedBy: 'John_wick',
        },
        {
            id: '1',
            title: 'Title 8',
            updatedAt: date,
            description: 'Random descriptions to test a few scenarios',
            ownedBy: 'John_wick',
        }
    ],
    userRecipies: [
        {
            id: '1',
            title: 'Title 1',
            updatedAt: date,
            description: 'Random descriptions to test a few scenarios',
            ownedBy: 'John_wick',
        },
        {
            id: '1',
            title: 'Title 2',
            updatedAt: date,
            description: 'Random descriptions to test a few scenarios',
            ownedBy: 'John_wick',
        },
        {
            id: '1',
            title: 'Title 3',
            updatedAt: date,
            description: 'Random descriptions to test a few scenarios',
            ownedBy: 'John_wick',
        },
        {
            id: '1',
            title: 'Title 4',
            updatedAt: date,
            description: 'Random descriptions to test a few scenarios',
            ownedBy: 'John_wick',
        }
    ],
    savedRecipies: [
        {
            id: '1',
            title: 'Title 5',
            updatedAt: date,
            description: 'Random descriptions to test a few scenarios',
            ownedBy: 'John_wick',
        },
        {
            id: '2',
            title: 'Title 6',
            updatedAt: date,
            description: 'Random descriptions to test a few scenarios',
            ownedBy: 'John_wick',
        },
    ],
    selectedRecipe: {
        id: '1',
        title: 'Title 1',
        updatedAt: date,
        description: 'Random descriptions to test a few scenarios',
        ownedBy: 'John_wick',
    },
};

export const recipeReducer = (state=initialState, action) => {
    return state;
}