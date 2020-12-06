import React from 'react';
import HomeNavigation from '../../components/HomeNavigation/HomeNavigation';
import NavigationComponent from '../../components/Navigation/NavigationComponent';
import RecipeGridComponent from '../../components/RecipeGridLayout/RecipeGridComponent';
import { connect } from 'react-redux';
import { ReactComponent as Plus } from '../../images/plus.svg';
import style from './OwnedRecipes.module.css';

class OwnedRecipes extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    createRecipe = (event) => {
        event.preventDefault();
        this.props.history.push(`/ownedRecipes/${this.props.userId}/create`);
    }

    render() {
        return (
            <>
                <NavigationComponent />
                <div>
                    <HomeNavigation />
                    <RecipeGridComponent recipes={this.props.ownedRecipes} />
                </div>
                <a href="#" className={style.float_button} onClick = {(event) => this.createRecipe(event)}>
                    <Plus width="20px" height = "20px" className={style.my_float} />
                </a>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    ownedRecipes: state.recipeReducer.ownedRecipes,
    userId: state.userReducer._id,
});

export default connect(mapStateToProps)(OwnedRecipes);