import React from 'react';
import HomeNavigation from '../../components/HomeNavigation/HomeNavigation';
import NavigationComponent from '../../components/Navigation/NavigationComponent';
import RecipeGridComponent from '../../components/RecipeGridLayout/RecipeGridComponent';
import {connect} from 'react-redux';
import {findRandomRecipes} from "../../actions/recipeAction";
import {getRecipeDetails} from "../../services/RecipeService";
import RecipeContent from "../../components/RecipeContent/RecipeContentComponent";
import {getDetails} from "../../actions/recipeAction";

class RecipeDetails
extends
React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const recipeId = this.props.match.params.recipeId
        this.props.getRecipeDetails(recipeId);
    }

    componentDidUpdate() {

    }

    render() {
        return (
            <>
                <NavigationComponent/>
                <div>
                    <HomeNavigation/>
                    <RecipeContent recipe={this.props.recipe}/>
                </div>
            </>
        );
    }

}
    const mapStateToProps = (state) => ({
        recipe: state.recipeReducer.recipe,
    });

    const mapPropsToDispatch = (dispatch) =>
        ({
            getRecipeDetails: (recipeId) => getDetails(dispatch, recipeId)
        })

export default
    connect(mapStateToProps, mapPropsToDispatch)(RecipeDetails);

