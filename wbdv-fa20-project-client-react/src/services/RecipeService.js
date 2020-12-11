const localRecipesURL = 'http://localhost:4000/api/recipes';

const searchRecipesUrl = "https://api.spoonacular.com/recipes/complexSearch"
//const generateRecipeCardUrl = "https://api.spoonacular.com/recipes/visualizeRecipe"
const recipeImageUrl = "https://spoonacular.com/recipeImages/{ID}-{SIZE}.{TYPE}"
const apiKey = "fd8eb1342ad14b99aa1933816c38d9fe"


export const findRandomRecipes = () =>
    fetch(`${localRecipesURL}`)
        .then(response => response.json())

export const searchRecipes = (query) =>
    fetch(`${searchRecipesUrl}/?query=${query}?includeInstructions=true&apiKey=${apiKey}`)
        .then(response => response.json())

export const getRecipeDetails = (recipeId) => {
    return fetch(`${localRecipesURL}/${recipeId}`)
        .then(response => response.json())
}


export default {searchRecipes, getRecipeDetails, findRandomRecipes}


