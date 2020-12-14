import {FETCH_REVIEW_COMMENTS} from "../actions/reviewCommentAction";

const initialState = {
    reviewComments: []
}


export const reviewCommentReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REVIEW_COMMENTS:
            return {
                ...state,
                reviewComments: action.arrayOfReviewObj
            }
        default :
            return state;
    }
}
