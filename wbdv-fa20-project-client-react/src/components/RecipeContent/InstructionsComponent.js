import React from 'react';
import {connect} from "react-redux";
//TODO handle instructions from local DB
const InstructionsComponent = ({recipe}) => {
    return (
        <div className="col">
            <h3>Instructions</h3>
            <ul className="list-group">
                {splitText(recipe.instructions).map(line=><li className="list-group-item">{line}</li>)}
            </ul>
        </div>
    )
}
const mapStateToProps = (state) => ({
    recipe: state.recipeReducer.recipe,
    // ingredient: state.recipeReducer.ingredient,
    // extendedIngredient: state.recipeReducer.extendedIngredient
})

const splitText = (instructions) => {
    const trimmedInstructions = instructions.trim()
    return trimmedInstructions.split("\n");}

export default connect(mapStateToProps)(InstructionsComponent)
