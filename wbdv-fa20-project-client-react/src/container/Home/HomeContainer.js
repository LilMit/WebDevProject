import React from 'react';
import HomeNavigation from '../../components/HomeNavigation/HomeNavigation';
import NavigationComponent from '../../components/Navigation/NavigationComponent';
import RecipeGridComponent from '../../components/RecipieGridLayout/RecipeGridComponent';
import { connect } from 'react-redux';

class Home extends React.Component {
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
                <RecipeGridComponent recipes={this.props.recipes} />
            </div>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    recipes: state.recipeReducer.recipes,
});

export default connect(mapStateToProps)(Home);