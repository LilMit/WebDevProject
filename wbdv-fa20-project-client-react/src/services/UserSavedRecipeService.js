const localSavedRecipesURL = 'http://localhost:4000/api/savedRecipes';
const localSavedRecipesCreateURL = 'http://localhost:4000/api/recipes';

const remoteSavedRecipesURL = 'https://tranquil-waters-97142.herokuapp.com/api/savedRecipes';
const remoteSavedRecipesCreateURL = 'https://tranquil-waters-97142.herokuapp.com/api/recipes';

const saveRecipe = (userId, recipeId) => {
    const init = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
    };
    return fetch(`${remoteSavedRecipesCreateURL}/${recipeId}/users/${userId}`, init).then(response => response.json());
}

const deleteSavedRecipe = (userId, recipeId) => {
    const init = {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
        },
    };
    return fetch(`${remoteSavedRecipesCreateURL}/${recipeId}/users/${userId}`, init).then(response => response.json());
}

const getAllSavedRecipes = (userId) => {
    return fetch(`${remoteSavedRecipesURL}/users/${userId}`).then(response => response.json());
}

export default {
    saveRecipe,
    deleteSavedRecipe,
    getAllSavedRecipes
}
