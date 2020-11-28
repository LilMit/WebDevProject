import RecipeService from "../services/RecipeService";

export const CREATE_RECIPE = "CREATE_RECIPE";
export const DELETE_RECIPE = "DELETE_RECIPE";
export const SEARCH_RECIPES = "SEARCH_RECIPES";
export const GET_DETAILS = "GET_DETAILS";
export const FIND_SAVED_RECIPES = "FIND_SAVED_RECIPES";
export const FIND_OWNED_RECIPES = "FIND_OWNED_RECIPES";
export const UPDATE_RECIPE = "UPDATE_RECIPE";

export const searchRecipes = (dispatch, query) => {
    RecipeService.searchRecipes(query).then(actualRecipes=>dispatch({type:SEARCH_RECIPES, recipes: actualRecipes}))
}

export const getDetails = (dispatch, recipeId) => {
    RecipeService.getRecipeDetails(recipeId).then(actualRecipe=>dispatch({type: GET_DETAILS, recipe: actualRecipe}))
}

