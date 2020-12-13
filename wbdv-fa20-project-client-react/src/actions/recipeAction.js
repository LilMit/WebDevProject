import RecipeService from "../services/RecipeService";
import recipeService from "../services/RecipeService";

export const CREATE_RECIPE = "CREATE_RECIPE";
export const DELETE_RECIPE = "DELETE_RECIPE";
export const SEARCH_RECIPES = "SEARCH_RECIPES";
export const GET_RECIPE_DETAILS = "GET_RECIPE_DETAILS";
export const FIND_SAVED_RECIPES = "FIND_SAVED_RECIPES";
export const FIND_OWNED_RECIPES = "FIND_OWNED_RECIPES";
export const UPDATE_RECIPE = "UPDATE_RECIPE";
export const FIND_RANDOM_RECIPES = "FIND_RANDOM";
export const UPDATE_QUERY = "UPDATE_QUERY"

export const findRandomRecipes = (dispatch) => {
    recipeService.findRandomRecipes()
        .then(actualRecipes => {
            dispatch({type: FIND_RANDOM_RECIPES, recipes: actualRecipes.recipes})
        })
}

export const updateQuery = (dispatch, query) => {
    dispatch({type: UPDATE_QUERY, query})
}

export const searchRecipes = (dispatch, query) => {

    RecipeService.searchRecipes(query).then(actualRecipes => dispatch({type: SEARCH_RECIPES, recipes: actualRecipes.results}))

    recipeService.searchRecipes(query).then(actualRecipes => dispatch({
        type: SEARCH_RECIPES,
        recipes: actualRecipes.recipes
    }))
}

export const getRecipeDetails = (dispatch, recipeId) => {
    recipeService.getRecipeDetails(recipeId)
        .then(actualRecipe => {
            console.log("actualRecipe", actualRecipe);
            dispatch({
                type: GET_RECIPE_DETAILS,
                recipe: actualRecipe
            })
        })
}

export const findOwnedRecipes = (dispatch, ownedRecipes) => {
    dispatch({
        type: FIND_OWNED_RECIPES,
        ownedRecipes
    });
}