import React, { useState } from 'react';
import {connect} from 'react-redux'
import { useHistory } from 'react-router-dom';
import { addSavedRecipe, deleteSavedRecipe } from '../../actions/recipeAction';
import RecipeService from '../../services/RecipeService';
import UserSavedRecipeService from '../../services/UserSavedRecipeService';
import IngredientsComponent from "./IngredientsComponent";

const RecipeContent = ({recipe, isSavedRecipe, savedRecipes, isOwner, userId, addSavedRecipeDispatchAction, deleteSavedRecipeDispatchAction}) => {

    const history = useHistory();

    const [recipeSaved, setRecipeSaved] = useState(isSavedRecipe);
    
    const saveRecipe = (event) => {
        event.preventDefault();
        if(!userId || userId === '') {
            history.push('/login');
        }
        UserSavedRecipeService.saveRecipe(userId, recipe._id).then((data) => {
            if(data && !data.error) {
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
            if(data && !data.error) {
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
            if(data && !data.error) {
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
                        <button className="btn btn-info m-1" onClick={(event) => saveRecipe(event)}>Save Recipe</button> :
                        <button className="btn btn-warning m-1" onClick={(event) => deleteSavedRecipe(event)}>Unsave Recipe</button>
                    }
                    {
                        isOwner && <button className="btn btn-danger m-1" onClick = {(event) => deleteRecipe(event)}>Delete Recipe</button>
                    }
                    {
                        isOwner && <button className="btn btn-primary m-1" onClick = {(event) => editRecipe(event)}>Edit Recipe</button>
                    }
                    <ul className="list-group">
                        <li className="list-group-item">Time to prepare: {recipe.readyInMinutes} minutes </li>
                        <li className="list-group-item">Serves: {recipe.servings}</li>
                        {recipe.sourceUrl && <li className="list-group-item">Original Posting: <a className="nav-link" href={recipe.sourceUrl}>{recipe.title}</a>
                        </li>}
                        {!recipe.sourceUrl && <li className="list-group-item">Original Posting: {recipe.title} </li>}
                    </ul>
                </div>
            </div>
            <div className="row">
                    <IngredientsComponent {...recipe}/>
                    {/*<InstructionsComponent {...recipe}/>*/}
                <div className = "col">
                    <h3>Instructions</h3>
                    {recipe.instructions}
                </div>
            </div>
            <div className="row">
                {/*TODO reviews component*/}
                <h1>Reviews (review component placeholder)</h1>
            </div>
        </div>
    );

}

const mapStateToProps = (state) => {
    let isSavedRecipe = false;
    const recipe = state.recipeReducer.recipe;
    const savedRecipes = state.recipeReducer.savedRecipes;
    savedRecipes.forEach(savedRecipe => {
        if(savedRecipe._id === recipe._id) {
            isSavedRecipe = true;
        }
    });

    let isOwner = false; 
    if(recipe.userId) {
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
    addSavedRecipeDispatchAction: (recipe) => addSavedRecipe(dispatch,recipe),
    deleteSavedRecipeDispatchAction: (recipeId) => deleteSavedRecipe(dispatch, recipeId)
})
//TODO add save recipe action and comment components
export default connect(mapStateToProps, mapDispatchToProps)(RecipeContent);
