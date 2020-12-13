import React from 'react';
import HomeNavigation from '../../components/HomeNavigation/HomeNavigation';
import NavigationComponent from '../../components/Navigation/NavigationComponent';
import RecipeGridComponent from '../../components/RecipeGridLayout/RecipeGridComponent';
import {connect} from 'react-redux';
import UserSavedRecipeService from '../../services/UserSavedRecipeService';
import { findSavedRecipes } from '../../actions/recipeAction';

class SavedRecipes extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if(!this.props.userId) {
            this.props.history.push('/home');
        }
        UserSavedRecipeService.getAllSavedRecipes(this.props.userId).then((data) => {
            if(data && !data.error) {
                this.props.findAllSavedRecipesDispatch(data);
            }
        }).catch((data) => {

        });
    }

    componentDidUpdate() {
        UserSavedRecipeService.getAllSavedRecipes(this.props.userId).then((data) => {
            if(data && !data.error) {
                if(this.props.savedRecipes.length !== data.length) {
                    this.props.findAllSavedRecipesDispatch(data);
                }
            }
        }).catch((data) => {

        });
    }

    render() {
        return (
            <>
                <NavigationComponent/>
                <div>
                    <HomeNavigation/>
                    <RecipeGridComponent recipes={this.props.savedRecipes}/>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    savedRecipes: state.recipeReducer.savedRecipes,
    userId: state.userReducer._id,
});

const mapDispatchToProps = (dispatch) => ({
    findAllSavedRecipesDispatch: (savedRecipes) => findSavedRecipes(dispatch, savedRecipes),
 });

export default connect(mapStateToProps, mapDispatchToProps)(SavedRecipes);
