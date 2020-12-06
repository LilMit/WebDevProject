import React from 'react';
import {connect} from "react-redux";

const IngredientsComponent = ({recipe}) => {
    return (
        <div className="col">
            <h3>Ingredients</h3>

            {
                recipe.user_id === "" &&
                <ul className="list-group">{
                    recipe.extendedIngredients.map(
                        extendedIngredient => <li className="list-group-item">{extendedIngredient.originalString}</li>)
                }</ul>}
            {
                recipe.user_id !== "" &&
                <ul className="list-group">{
                recipe.ingredients.map(ingredient => <li className="list-group-item">{ingredient}</li>)
            }</ul>
            }


            }
        </div>
    )
}
const mapStateToProps = (state) => ({
    recipe: state.recipeReducer.recipe,
    // ingredient: state.recipeReducer.ingredient,
    // extendedIngredient: state.recipeReducer.extendedIngredient
})
export default connect(mapStateToProps) (IngredientsComponent)
