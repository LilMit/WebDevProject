import React from 'react';
import {connect} from "react-redux";
//TODO handle instructions from local DB
const InstructionsComponent = ({recipe}) => {
    return (
        <div className="col">
            <h3>Instructions</h3>
            {console.log({recipe})}
            {recipe.analyzedInstructions !== [{steps: [{number: "", step: ""}]}] &&
            <ol className="list-group">
                {recipe.analyzedInstructions.steps.map(
                actualStep => <li className="list-group-item">{actualStep.step}</li>)}
            </ol>}{recipe.analyzedInstructions === [{steps: [{number: "", step: ""}]}] &&
        recipe.instructions}
        </div>
    )
}
const mapStateToProps = (state) => ({
    recipe: state.recipeReducer.recipe,
    // ingredient: state.recipeReducer.ingredient,
    // extendedIngredient: state.recipeReducer.extendedIngredient
})
export default connect(mapStateToProps)(InstructionsComponent)
