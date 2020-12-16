const localReviewCommentsURL = 'https://tranquil-waters-97142.herokuapp.com/api/recipes';
// const localReviewCommentsURL = 'http://localhost:4000/api/recipes';

export const getReviewComments = (dispatch, recipeId) => {
    return fetch(`${localReviewCommentsURL}/${recipeId}/reviewComments`)
        .then(response => response.json());
}

export const createReviewComments = (comment, rating, userId, recipeId) => {
    const reviewCommentObj = {
        comment,
        rating,
        userId,
    }
    return fetch(`${localReviewCommentsURL}/${recipeId}/reviewComments`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(reviewCommentObj)
    }).then(response => response.json());
}

export const deleteReviewComments = (recipeId, reviewId) => {
    return fetch(`${localReviewCommentsURL}/${recipeId}/reviewComments/${reviewId}`, {
        method: 'DELETE',
    }).then(response => response.json());
}

export default {
    getReviewComments,
    createReviewComments,
    deleteReviewComments,
}
