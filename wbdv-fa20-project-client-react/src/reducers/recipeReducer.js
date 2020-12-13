import {FIND_RANDOM_RECIPES, GET_RECIPE_DETAILS, SEARCH_RECIPES, UPDATE_QUERY, FIND_OWNED_RECIPES, FIND_SAVED_RECIPES, DELETE_SAVED_RECIPES, ADD_SAVED_RECIPES, ADD_RECENT_RECIPES} from "../actions/recipeAction";


const date = new Date().toDateString();
const initialState = {
    recipes: [],
    // TODO add created/updated date/timestamps
    recipe: {
        readyInMinutes: 0, image: "", title: "", servings: 0, sourceUrl: "", ingredients: "", instructions: "",
        user_id: -1
    },
    query: "",
    ownedRecipes: [],
    savedRecipes: [],
    recentRecipes: [],

}

export const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_RANDOM_RECIPES:
            return {
                ...state,
                recipes: action.recipes
            }
        case SEARCH_RECIPES:
            return {
                ...state,
                recipes: action.recipes
            }
        case GET_RECIPE_DETAILS:
            return {
                ...state,
                recipe: action.recipe
            }
        case UPDATE_QUERY:
            return {
                ...state,
                query: action.query
            }
        case FIND_OWNED_RECIPES:
            return {
                ...state,
                ownedRecipes: action.ownedRecipes,
            }
        case FIND_SAVED_RECIPES:
            return {
                ...state,
                savedRecipes: action.savedRecipes,
            }
        case ADD_SAVED_RECIPES:
            return {
                ...state,
                savedRecipes: [
                    ...state.savedRecipes,
                    action.savedRecipe
                ],
            }
        case DELETE_SAVED_RECIPES:
            return {
                ...state,
                savedRecipes: state.savedRecipes.filter(recipe => recipe._id !== action.recipeId)
            }
        case ADD_RECENT_RECIPES:
            return {
                ...state,
                recentRecipes: action.recipes,
            }
        default:
            return state;
    }
}
