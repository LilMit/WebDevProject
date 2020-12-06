import {FIND_RANDOM_RECIPES, GET_DETAILS, SEARCH_RECIPES, UPDATE_QUERY} from "../actions/recipeAction";

const date = new Date().toDateString();
const initialState = {
    recipes: [],
    // TODO add created/updated date/timestamps
    recipe: {
        readyInMinutes: 0, image: "", title: "", servings: 0, sourceUrl: "", ingredients: [], instructions: "",
        extendedIngredients: [], user_id: -1, analyzedInstructions: [{steps: [{number: "", step: ""}]}]
    },
    extendedIngredient: {originalString: ""},
    // steps: {number: "", step: ""},
    query: ""
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
        case GET_DETAILS:
            return {
                ...state,
                recipe: action.recipe
            }
        case UPDATE_QUERY:
            return {
                ...state,
                query: action.query
            }
        default:
            return state;
    }
}
