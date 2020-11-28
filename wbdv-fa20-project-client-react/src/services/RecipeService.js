const searchRecipesUrl = "https://api.spoonacular.com/recipes/complexSearch"
//const generateRecipeCardUrl = "https://api.spoonacular.com/recipes/visualizeRecipe"
const recipeImageUrl = "https://spoonacular.com/recipeImages/{ID}-{SIZE}.{TYPE}"
const apiKey = "fd8eb1342ad14b99aa1933816c38d9fe"
const recipeDetailsUrl = "https://api.spoonacular.com/recipes"
const recipeDetailsSecondHalf = "information?includeNutrition=false&apiKey=fd8eb1342ad14b99aa1933816c38d9fe"


//ToDo: use actual query param?
export const searchRecipes = (query) =>
    fetch(`${searchRecipesUrl}/?query=${query}&apiKey=${apiKey}`).then(response=>response.json())

export const getRecipeDetails = (recipeId) =>
    fetch(`${recipeDetailsUrl}/${recipeId}/${recipeDetailsSecondHalf}`).then(response=>response.json())

export default {searchRecipes, getRecipeDetails}


