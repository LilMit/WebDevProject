import React from 'react';
import ReactStars from "react-rating-stars-component";
import {connect} from "react-redux";
import aquaman from "../../images/userAvatars/aquaman.png"
import batman from "../../images/userAvatars/batman.png"
import flash from "../../images/userAvatars/flash.png"
import harleyQuinn from "../../images/userAvatars/harleyQuinn.png"
import joker from "../../images/userAvatars/joker.png"
import leela from "../../images/userAvatars/leela.png"
import superman from "../../images/userAvatars/superman.png"
import zoidberg from "../../images/userAvatars/zoidberg.png"
import {getReviewComments} from "../../actions/reviewCommentAction";
import ReviewCommentsService from "../../services/ReviewCommentsService";
import {MdDelete} from "react-icons/all";

const ReviewComponent = ({recipe, recipeWithReviewComments = {}, userId, getReviewCommentsAction}) => {

    const initialState = {
        newComment: "",
        rating: 0,
    }
    const [commentDetails, setCommentDetails] = React.useState(initialState);

    const avatars = [aquaman, batman, flash, harleyQuinn, joker, leela, superman, zoidberg];

    React.useEffect(() => {
        if (recipe._id) {
            getReviewCommentsAction(recipe._id)
        } else {
            console.log("ERRRRRRRRRR")
        }
    }, [recipe._id])

    const saveReviewCommentForRecipe = () => {
        ReviewCommentsService.createReviewComments(commentDetails.newComment, commentDetails.rating, userId, recipe._id)
            .then(() => {
                getReviewCommentsAction(recipe._id);
            })
    }

    const ratingChanged = (newRating) => {
        setCommentDetails({...commentDetails, rating: newRating});
    };

    const commentChanged = (e) => {
        e.preventDefault();
        setCommentDetails({...commentDetails, newComment: e.target.value});
    }

    const deleteReviewCommentAction = (e, recipeId, reviewCommentObj) => {
        e.preventDefault();
        console.log("reviewCommentObj", reviewCommentObj);
        ReviewCommentsService.deleteReviewComments(recipeId, reviewCommentObj._id)
            .then((data) => {
                if (data && !data.err) {
                    getReviewCommentsAction(recipeId);
                }
            })
            .catch(err => console.log(err));
    }

    console.log("recipeWithReviewComments", recipeWithReviewComments);

    return (
        <div className="mb-5 w-100 p-auto">
            <h1> Reviews </h1>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">What do you think about the recipe? </label>
                <textarea placeholder="Leave your comment here" className="form-control mb-2"
                          id="exampleFormControlTextarea1" rows="3"
                          onChange={(e) => commentChanged(e)}
                          value={commentDetails.newComment}
                ></textarea>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                    value={commentDetails.rating}
                />
                <button className="btn btn-primary btn-success mb-3"
                        onClick={() => saveReviewCommentForRecipe()}>
                    Submit Comment
                </button>
            </div>
            <div className="form-group border m-2 p-auto w-auto">
                <h4 className="m-3"> User Comments </h4>
                {recipeWithReviewComments.length !== 0 &&
                recipeWithReviewComments.reviewComments.map((reviewCommentObj, idx) =>
                    <React.Fragment key={reviewCommentObj._id}>
                        <div className="form-inline p-auto ml-3">
                            <img src={avatars[idx % avatars.length]} alt="new" width="40"
                                 height="40"/>
                            <div>&nbsp; &nbsp;</div>
                            <label
                                className="font-weight-bold"> {reviewCommentObj.userId.username} &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; </label>
                            <textarea type="text" className="form-control" value={`"${reviewCommentObj.comment}"`}/>
                            <div>&nbsp; &nbsp;&nbsp;</div>
                            <ReactStars
                                count={5}
                                size={24}
                                value={reviewCommentObj.rating}
                                activeColor="#ffd700"
                                readOnly
                                edit={false}
                            />
                            {
                                userId === reviewCommentObj.userId._id &&
                                <a href="#" className="col-6"
                                   onClick={(e) => deleteReviewCommentAction(e, recipe._id, reviewCommentObj)}>
                                    <MdDelete className="trashRed" size={30}/>
                                </a>
                            }
                        </div>
                        <br/>
                    </React.Fragment>
                )
                }
            </div>
        </div>
    );
}


const mapStateToProps = (state) => ({
    recipe: state.recipeReducer.recipe,
    userId: state.userReducer._id,
    recipeWithReviewComments: state.reviewCommentReducer.reviewComments,
})

const mapStateToDispatch = (dispatch) => ({
    getReviewCommentsAction: (recipeId) => getReviewComments(dispatch, recipeId),
})

export default connect(mapStateToProps, mapStateToDispatch)(ReviewComponent)

