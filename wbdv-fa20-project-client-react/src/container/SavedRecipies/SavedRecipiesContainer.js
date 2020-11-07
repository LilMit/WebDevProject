import React from 'react';
import HomeNavigation from '../../components/HomeNavigation/HomeNavigation';
import NavigationComponent from '../../components/Navigation/NavigationComponent';
import RecipeGridComponent from '../../components/RecipieGridLayout/RecipeGridComponent';
import { connect } from 'react-redux';

class SavedRecipies extends React.Component {
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
                <RecipeGridComponent recipies={this.props.savedRecipies} />
            </div>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    savedRecipies: state.recipeReducer.savedRecipies,
});

export default connect(mapStateToProps)(SavedRecipies);