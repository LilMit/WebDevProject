import RecipeService from "../services/RecipeService";

export const CREATE_RECIPE = "CREATE_RECIPE";
export const DELETE_RECIPE = "DELETE_RECIPE";
export const SEARCH_RECIPES = "SEARCH_RECIPES";
export const GET_DETAILS = "GET_DETAILS";
export const FIND_SAVED_RECIPES = "FIND_SAVED_RECIPES";
export const FIND_OWNED_RECIPES = "FIND_OWNED_RECIPES";
export const UPDATE_RECIPE = "UPDATE_RECIPE";
export const FIND_RANDOM_RECIPES = "FIND_RANDOM";

export const findRandomRecipes = (dispatch) => {
    RecipeService.findRandomRecipes().
        then(actualRecipes => {console.log(actualRecipes); dispatch({type: FIND_RANDOM_RECIPES, recipes: actualRecipes.recipes})})
}

export const searchRecipes = (dispatch, query) => {
    RecipeService.searchRecipes(query).then(actualRecipes => dispatch({type: SEARCH_RECIPES, recipes: actualRecipes.recipes}))
}

export const getDetails = (dispatch, recipeId) => {
    RecipeService.getRecipeDetails(recipeId).then(actualRecipe => {console.log(actualRecipe); dispatch({type: GET_DETAILS, recipe: actualRecipe})})
}

