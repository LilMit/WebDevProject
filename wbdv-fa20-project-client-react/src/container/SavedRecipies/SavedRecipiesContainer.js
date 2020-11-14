import React from 'react';
import HomeNavigation from '../../components/HomeNavigation/HomeNavigation';
import NavigationComponent from '../../components/Navigation/NavigationComponent';
import RecipeGridComponent from '../../components/RecipieGridLayout/RecipeGridComponent';
import { connect } from 'react-redux';

class SavedRecipes extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    render() {
        return (
            <>
            <NavigationComponent />
            <div>
                <HomeNavigation />
                <RecipeGridComponent recipes={this.props.savedRecipes} />
            </div>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    savedRecipes: state.recipeReducer.savedRecipes,
});

export default connect(mapStateToProps)(SavedRecipes);