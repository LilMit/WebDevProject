import React from 'react';
import HomeNavigation from '../../components/HomeNavigation/HomeNavigation';
import NavigationComponent from '../../components/Navigation/NavigationComponent';
import {connect} from 'react-redux';
import {ReactComponent as Plus} from '../../images/plus.svg';
import { findOwnedRecipes } from '../../actions/recipeAction';
import style from './OwnedRecipes.module.css';
import RecipeService from '../../services/RecipeService';
import RecipeGridComponent from '../../components/RecipeGridLayout/RecipeGridComponent';

class OwnedRecipes extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if(!this.props.userId) {
            this.props.history.push('/home');
        }
        RecipeService.getAllOwnedRecipes(this.props.userId).then((data) => {
            if(data && !data.error) {
                this.props.findAllOwnedRecipesDispatch(data);
            }
        }).catch((data) => {

        });
    }

    componentDidUpdate() {
        RecipeService.getAllOwnedRecipes(this.props.userId).then((data) => {
            if(data && !data.error) {
                if(this.props.ownedRecipes.length !== data.length) {
                    this.props.findAllOwnedRecipesDispatch(data);
                }
            }
        }).catch((data) => {

        });
    }

    createRecipe = (event) => {
        event.preventDefault();
        this.props.history.push(`/ownedRecipes/${this.props.userId}/create`);
    }

    render() {
        return (
            <>
                <NavigationComponent/>
                <div>
                    <HomeNavigation/>
                    <RecipeGridComponent recipes={this.props.ownedRecipes}/>
                </div>
                <a href="#" className={style.float_button} onClick={(event) => this.createRecipe(event)}>
                    <Plus width="20px" height="20px" className={style.my_float}/>
                </a>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    ownedRecipes: state.recipeReducer.ownedRecipes,
    userId: state.userReducer._id,
});

const mapDispatchToProps = (dispatch) => ({
   findAllOwnedRecipesDispatch: (ownedRecipes) => findOwnedRecipes(dispatch, ownedRecipes),
});

export default connect(mapStateToProps, mapDispatchToProps)(OwnedRecipes);
