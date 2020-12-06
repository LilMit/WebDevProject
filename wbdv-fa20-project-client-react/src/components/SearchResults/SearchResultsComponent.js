import React from 'react';
import NavigationComponent from "../Navigation/NavigationComponent";
import HomeNavigation from "../HomeNavigation/HomeNavigation";
import RecipeGridComponent from "../RecipeGridLayout/RecipeGridComponent";
import {searchRecipes} from "../../actions/recipeAction";
import {connect} from "react-redux";

class SearchResultsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const query = this.props.match.params.query
        this.props.searchRecipes(query)
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

const mapPropsToDispatch = (dispatch) =>
    ({
        searchRecipes: (query)=> searchRecipes(dispatch, query)
    })

export default connect(mapStateToProps, mapPropsToDispatch)(SearchResultsPage);
