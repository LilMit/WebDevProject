import React from 'react';
import {connect} from 'react-redux'
import IngredientsComponent from "./IngredientsComponent";


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
                    <ul>
                        <li>Time to prepare: {recipe.readyInMinutes}</li>
                        <li>Serves: {recipe.servings}</li>
                        <li>Original Posting: <a className="nav-link" href={recipe.sourceUrl}>{recipe.title}</a>
                            <li>rate recipe stars (only if user logged in)</li>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                {console.log(recipe)}
                    <IngredientsComponent {...recipe}/>
                <div className = "col">
                    <h3>Instructions</h3>
                    <p>{recipe.instructions}</p>
                </div>
            </div>
            <div className="row">
                <h1>Reviews (review component placeholder)</h1>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => ({
    recipe: state.recipeReducer.recipe
})
export default connect(mapStateToProps) (RecipeContent);
