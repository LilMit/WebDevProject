import React from 'react';
import HomeNavigation from '../../components/HomeNavigation/HomeNavigation';
import NavigationComponent from '../../components/Navigation/NavigationComponent';
import RecipeGridComponent from '../../components/RecipeGridLayout/RecipeGridComponent';
import { connect } from 'react-redux';

class OwnedRecipes extends React.Component {
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
                <RecipeGridComponent recipes={this.props.ownedRecipes} />
            </div>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    ownedRecipes: state.recipeReducer.ownedRecipes,
});

export default connect(mapStateToProps)(OwnedRecipes);