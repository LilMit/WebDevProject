import React from 'react';
import NavigationComponent from "../../components/Navigation/NavigationComponent";
import HomeNavigation from "../../components/HomeNavigation/HomeNavigation";
import RecipeGridComponent from "../../components/RecipeGridLayout/RecipeGridComponent";
import {searchRecipes} from "../../actions/recipeAction";
import {connect} from "react-redux";

class SearchResultsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const query = this.props.match.params.query;
        // const query = this.props.match.params.query.split('?query=').pop();
        // TODO: this isnt waiting for response before render
        this.props.searchRecipes(query);
    }

    // TODO doesn't update when search updates, but putting it in componentDidUpdate causes infinite loop (RIP api calls)
    componentDidUpdate() {
        // if(this.props.query !== this.props.match.params.query) {
        //     // this.props.searchRecipes(this.props.match.params.query);
        //     console.log('Test');
        // }
    }

    render() {
        return (
            <>
                <NavigationComponent/>
                <div>
                    <HomeNavigation/>
                    <RecipeGridComponent recipes={this.props.recipes}/>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    recipes: state.recipeReducer.recipes,
    query: state.recipeReducer.query
});

const mapPropsToDispatch = (dispatch) =>
    ({
        searchRecipes: (query) => searchRecipes(dispatch, query)
    })

export default connect(mapStateToProps, mapPropsToDispatch)(SearchResultsPage);
