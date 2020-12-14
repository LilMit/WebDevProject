const localRecipesURL = 'http://localhost:4000/api/recipes';
const localRecipesCreateURL = 'http://localhost:4000/api/users';
const localRecentRecipes = 'http://localhost:4000/api/recentRecipes/users';

const remoteRecipesURL = 'https://tranquil-waters-97142.herokuapp.com/api/recipes';
const remoteRecipesCreateURL = 'https://tranquil-waters-97142.herokuapp.com/api/users';
const remoteRecentRecipes = 'https://tranquil-waters-97142.herokuapp.com/api/recentRecipes/users';

const searchRecipesUrl = "https://api.spoonacular.com/recipes/complexSearch"
//const generateRecipeCardUrl = "https://api.spoonacular.com/recipes/visualizeRecipe"
const recipeImageUrl = "https://spoonacular.com/recipeImages/{ID}-{SIZE}.{TYPE}"
// const apiKey = "fd8eb1342ad14b99aa1933816c38d9fe";
const apiKey = "54a4329446b941c4a1e48206f0703ae4";
const baseUrl = "https://api.spoonacular.com/recipes";
// const recipeDetailsSecondHalf = "information?includeNutrition=false&apiKey=fd8eb1342ad14b99aa1933816c38d9fe"
const recipeDetailsSecondHalf = "information?includeNutrition=false&apiKey=54a4329446b941c4a1e48206f0703ae4"
 
// export const findRandomRecipes = () =>
//     fetch(`${baseUrl}/random?number=16&apiKey=${apiKey}`)
//         .then(response => response.json())

export const findRandomRecipes = () =>
    fetch(`${localRecipesURL}`)
        .then(response => response.json())

export const searchRecipes = (query) =>
    fetch(`${searchRecipesUrl}/?query=${query}?includeInstructions=true&apiKey=${apiKey}`)
        .then(response => response.json())


// export const getRecipeDetails = (recipeId) => {
//     return fetch(`${baseUrl}/${recipeId}/${recipeDetailsSecondHalf}`)
//     .then(response => response.json())
// }

export const getRecipeDetails = (recipeId) => {
    return fetch(`${localRecipesURL}/${recipeId}`)
        .then(response => response.json())
}


export const addRecipeDetails = (userId, recipe) => {
    const init = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(recipe)
    };
    return fetch(`${localRecipesCreateURL}/${userId}/recipes`, init).then(response => response.json());
}

export const updateRecipe = (recipeId, recipe) => {
    const init = {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(recipe)
    };
    return fetch(`${localRecipesURL}/${recipeId}`, init).then(response => response.json());
}

export const deleteRecipe = (recipeId) => {
    const init = {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
        },
    };
    return fetch(`${localRecipesURL}/${recipeId}`, init).then(response => response.json());
}

export const fetchRecentRecipes = (userId) => {
    return fetch(`${localRecentRecipes}/${userId}`)
    .then(response => response.json());
}

export const getLocalRecipeDetails = (recipeId) => {
    return fetch(`${localRecipesURL}/${recipeId}`)
        .then(response => response.json())
}

export const getAllOwnedRecipes = (userId) => {
    return fetch(`${localRecipesCreateURL}/${userId}/recipes`).then(response => response.json());
}

export default {
    searchRecipes, 
    getRecipeDetails, 
    findRandomRecipes,
    fetchRecentRecipes,
    addRecipeDetails,
    updateRecipe,
    deleteRecipe,
    getAllOwnedRecipes,
    getLocalRecipeDetails
}


