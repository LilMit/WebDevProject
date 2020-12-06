import {FIND_RANDOM_RECIPES, GET_DETAILS, SEARCH_RECIPES} from "../actions/recipeAction";

const date = new Date().toDateString();
const initialState = {
    recipes: [],
    recipe: {
        readyInMinutes: 0, image: "", title: "", servings: 0, sourceUrl: "", ingredients: [], instructions: "",
        extendedIngredients: [], user_id: "", analyzedInstructions: []
    },
    extendedIngredient: {originalString: ""},
    analyzedInstruction: {steps: []},
    steps: {number: "", step: ""}
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
        default:
            return state;
    }
}
