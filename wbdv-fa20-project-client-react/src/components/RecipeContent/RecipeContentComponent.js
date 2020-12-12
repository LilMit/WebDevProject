import React from 'react';
import {connect} from 'react-redux'
import IngredientsComponent from "./IngredientsComponent";
import InstructionsComponent from "./InstructionsComponent";

//TODO if user not logged in, redirect to login page when rate or save recipe is clicked
const RecipeContent = ({recipe}) => {

    const getFormattedDate = (date) => {
        const todayTime = new Date(date);
        const month = todayTime.getMonth() + 1;
        const day = todayTime.getDate();
        const year = todayTime.getFullYear();
        return `${month}/${day}/${year}`;
    }

    return (
        <div className="container">
            <h1>{recipe.title}</h1>
            <div className="row">
                <div className="col">
                    <img className="card-img-top" src={recipe.image} alt="Recipe Image"/>
                </div>
                <div className="col">
                    <button className="btn btn-info">Save Recipe</button>
                    <ul className="list-group">
                        <li className="list-group-item">Time to prepare: {recipe.readyInMinutes} minutes </li>
                        <li className="list-group-item">Serves: {recipe.servings}</li>
                        <li className="list-group-item">Original Posting: <a className="nav-link" href={recipe.sourceUrl}>{recipe.title}</a>
                        </li>
                        {/*TODO lookup/calculate rating for recipe*/}
                        <li className="list-group-item">Rating:</li>
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
const mapStateToProps = (state) => ({
    recipe: state.recipeReducer.recipe
})
//TODO add save recipe action and comment components
export default connect(mapStateToProps)(RecipeContent);
