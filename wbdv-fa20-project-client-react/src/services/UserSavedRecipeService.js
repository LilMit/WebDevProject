const localSavedRecipesURL = 'https://tranquil-waters-97142.herokuapp.com/api/savedRecipes';
const localSavedRecipesCreateURL = 'https://tranquil-waters-97142.herokuapp.com/api/recipes';

const saveRecipe = (userId, recipeId) => {
    const init = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
    };
    return fetch(`${localSavedRecipesCreateURL}/${recipeId}/users/${userId}`, init).then(response => response.json());
}

const deleteSavedRecipe = (userId, recipeId) => {
    const init = {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
        },
    };
    return fetch(`${localSavedRecipesCreateURL}/${recipeId}/users/${userId}`, init).then(response => response.json());
}

const getAllSavedRecipes = (userId) => {
    return fetch(`${localSavedRecipesURL}/users/${userId}`).then(response => response.json());
}

export default {
    saveRecipe,
    deleteSavedRecipe,
    getAllSavedRecipes
}