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
                <RecipeGridComponent recipies={this.props.recipies} />
            </div>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    recipies: state.recipeReducer.recipies,
});

export default connect(mapStateToProps)(Home);