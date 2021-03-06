import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux'
import {Link, useHistory} from 'react-router-dom';
import {addSavedRecipe, deleteSavedRecipe, findSavedRecipes} from '../../actions/recipeAction';
import RecipeService from '../../services/RecipeService';
import IngredientsComponent from "./IngredientsComponent";
import ReviewComponent from "./ReviewCommentsComponent";
import UserSavedRecipeService from '../../services/UserSavedRecipeService';
import './review.styles.css';

const RecipeContent = ({recipe, isSavedRecipe, savedRecipes, isOwner, userId, addSavedRecipeDispatchAction, deleteSavedRecipeDispatchAction, findAllSavedRecipesDispatch}) => {

    const history = useHistory();

    const [recipeSaved, setRecipeSaved] = useState(isSavedRecipe);

    useEffect(() => {
        if (userId) {
            UserSavedRecipeService.getAllSavedRecipes(userId).then((data) => {
                if (data && !data.error) {
                    let recipeSavedCheck = false;
                    data.forEach(savedRecipe => {
                        if (savedRecipe._id === recipe._id) {
                            recipeSavedCheck = true;
                        }
                    });
                    if (recipeSavedCheck !== recipeSaved) {
                        setRecipeSaved(recipeSavedCheck);
                    }
                    if (savedRecipes.length !== data.length) {
                        findAllSavedRecipesDispatch(data);
                    }

                }
            }).catch((data) => {

            });
        }
    }, [recipe._id]);

    const saveRecipe = (event) => {
        event.preventDefault();
        if (!userId || userId === '') {
            history.push('/login');
            return;
        }
        UserSavedRecipeService.saveRecipe(userId, recipe._id).then((data) => {
            if (data && !data.error) {
                setRecipeSaved(true);
                addSavedRecipeDispatchAction(data);
            } else {
                alert('Something went wrong try again ins a few mintues.');
            }
        }).catch((data) => {
            alert('Something went wrong try again ins a few mintues.');
        })
    }

    const deleteSavedRecipe = (event) => {
        event.preventDefault();
        UserSavedRecipeService.deleteSavedRecipe(userId, recipe._id).then((data) => {
            if (data && !data.error) {
                setRecipeSaved(false);
                deleteSavedRecipeDispatchAction(recipe._id);
            } else {
                alert('Something went wrong try again ins a few mintues.');
            }
        }).catch((data) => {
            alert('Something went wrong try again ins a few mintues.');
        })
    }

    const deleteRecipe = (event) => {
        event.preventDefault();
        RecipeService.deleteRecipe(recipe._id).then((data) => {
            if (data && !data.error) {
                deleteSavedRecipeDispatchAction(recipe._id);
            }
            history.push(`/savedRecipes/${userId}`);
            console.log(data);
        });
    }

    const editRecipe = (event) => {
        event.preventDefault();
        history.push(`/edit/recipe/${recipe._id}`);
    }

    return (
        <div className="container">
            <h1>{recipe.title}</h1>
            <div className="row">
                <div className="col">
                    <img className="card-img-top" src={recipe.image || recipe.imageUrl} alt="Recipe Image"/>
                </div>
                <div className="col">
                    {
                        !recipeSaved ?
                            <button className="btn btn-info m-1" onClick={(event) => saveRecipe(event)}>Save
                                Recipe</button> :
                            <button className="btn btn-warning m-1" onClick={(event) => deleteSavedRecipe(event)}>Unsave
                                Recipe</button>
                    }
                    {
                        isOwner &&
                        <button className="btn btn-danger m-1" onClick={(event) => deleteRecipe(event)}>Delete
                            Recipe</button>
                    }
                    {
                        isOwner && <button className="btn btn-primary m-1" onClick={(event) => editRecipe(event)}>Edit
                            Recipe</button>
                    }
                    <ul className="list-group">
                        <li className="list-group-item">Time to prepare: {recipe.readyInMinutes} minutes</li>
                        <li className="list-group-item">Serves: {recipe.servings}</li>
                        {recipe.sourceUrl &&
                        <li className="list-group-item">Original Posting:
                            <a className="nav-link"
                               href={recipe.sourceUrl}>{recipe.title}</a>
                        </li>
                        }
                        {
                            !recipe.sourceUrl && <li className="list-group-item">Original Posting: {recipe.title} </li>
                        }
                        {
                            !recipe.sourceUrl && recipe.userId && !isOwner &&
                            <li className="list-group-item">Authors profile:
                                <Link to={`/profile/${recipe.userId._id}`} className="link">
                                    <span className="text wbdv-row wbdv-title"> {recipe.userId.username}</span>
                                </Link>
                            </li>
                        }
                        {
                            !recipe.sourceUrl && recipe.userId && isOwner &&
                            <li className="list-group-item">Authors profile:
                                <Link to={`/profile`} className="link">
                                    <span className="text wbdv-row wbdv-title"> Me </span>
                                </Link>
                            </li>
                        }
                    </ul>
                </div>
            </div>
            <div className="row">
                <IngredientsComponent {...recipe}/>
                {/*<InstructionsComponent {...recipe}/>*/}
                <div className="col">
                    <h3>Instructions</h3>
                    {recipe.instructions}
                </div>
            </div>
            <div className="row mb-3 w-auto">
                <ReviewComponent recipe={recipe}/>
            </div>
        </div>
    );

}

const mapStateToProps = (state) => {
    let isSavedRecipe = false;
    const recipe = state.recipeReducer.recipe;
    const savedRecipes = state.recipeReducer.savedRecipes;
    savedRecipes.forEach(savedRecipe => {
        if (savedRecipe._id === recipe._id) {
            isSavedRecipe = true;
        }
    });

    let isOwner = false;
    if (recipe.userId) {
        isOwner = recipe.userId._id === state.userReducer._id;
    }

    return {
        recipe: recipe,
        savedRecipes: savedRecipes,
        isSavedRecipe: isSavedRecipe,
        userId: state.userReducer._id,
        isOwner: isOwner
    }
}

const mapDispatchToProps = (dispatch) => ({
    addSavedRecipeDispatchAction: (recipe) => addSavedRecipe(dispatch, recipe),
    deleteSavedRecipeDispatchAction: (recipeId) => deleteSavedRecipe(dispatch, recipeId),
    findAllSavedRecipesDispatch: (savedRecipes) => findSavedRecipes(dispatch, savedRecipes),
})
//TODO add save recipe action and comment components
export default connect(mapStateToProps, mapDispatchToProps)(RecipeContent);
