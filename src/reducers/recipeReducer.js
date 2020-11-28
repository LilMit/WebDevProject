import {FIND_RANDOM_RECIPES, GET_DETAILS, SEARCH_RECIPES} from "../actions/recipeAction";

const date = new Date().toDateString();
const initialState = {
    recipes: []
}

const recipeReducer = (state=initialState, action) => {
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
        case GET_DETAILS:
            return {
                ...state,
                recipe: action.recipe
            }
        default:
            return state;
    }
}

export default recipeReducer
