import React from 'react';
import {connect} from "react-redux";
//TODO handle ingredients from local DB
const IngredientsComponent = ({recipe}) => {
    return (
        <div className="col">
            <h3>Ingredients</h3>
            {/*<ul className="list-group">{*/}
            {/*    recipe.extendedIngredients.map(*/}
            {/*        extendedIngredient => <li className="list-group-item">{extendedIngredient.originalString}</li>)*/}
            {/*}</ul>*/}
            <ul className="list-group">
                {splitText(recipe.ingredients).map(line=><li className="list-group-item">{line}</li>)}
            </ul>
        </div>
    )
}
const mapStateToProps = (state) => ({
    recipe: state.recipeReducer.recipe,
    // ingredient: state.recipeReducer.ingredient,
    // extendedIngredient: state.recipeReducer.extendedIngredient
})

const splitText = (ingredients) => ingredients.split("\n");
export default connect(mapStateToProps) (IngredientsComponent)
