import React from 'react';
import HomeNavigation from '../../components/HomeNavigation/HomeNavigation';
import NavigationComponent from '../../components/Navigation/NavigationComponent';
import RecipeGridComponent from '../../components/RecipieGridLayout/RecipeGridComponent';
import { connect } from 'react-redux';

class OwnedRecipies extends React.Component {
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
                <RecipeGridComponent recipies={this.props.ownedRecipies} />
            </div>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    ownedRecipies: state.recipeReducer.ownedRecipies,
});

export default connect(mapStateToProps)(OwnedRecipies);