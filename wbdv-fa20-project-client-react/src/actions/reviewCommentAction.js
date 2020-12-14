import reviewCommentsService from "../services/ReviewCommentsService";

export const FETCH_REVIEW_COMMENTS = "FETCH_REVIEW_COMMENTS";

export const getReviewComments = (dispatch, recipeId) => {
    reviewCommentsService.getReviewComments(dispatch, recipeId)
        .then(arrayOfReviewObj => {
            dispatch({
                type: FETCH_REVIEW_COMMENTS,
                arrayOfReviewObj,
            })
        }).catch((err) => {
        console.log(err);
    });
}
