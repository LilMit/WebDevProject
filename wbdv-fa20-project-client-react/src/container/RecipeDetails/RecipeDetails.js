import React from 'react';
import HomeNavigation from '../../components/HomeNavigation/HomeNavigation';
import NavigationComponent from '../../components/Navigation/NavigationComponent';
import {connect} from 'react-redux';
import {getRecipeDetails} from "../../actions/recipeAction";
import RecipeContent from "../../components/RecipeDetails/RecipeDetailsComponent";

class RecipeDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const recipeId = this.props.match.params.recipeId;
        console.log(this.props);
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

const mapPropsToDispatch = (dispatch) => ({
    getRecipeDetails: (recipeId) => getRecipeDetails(dispatch, recipeId)
})

export default connect(mapStateToProps, mapPropsToDispatch)(RecipeDetails);

