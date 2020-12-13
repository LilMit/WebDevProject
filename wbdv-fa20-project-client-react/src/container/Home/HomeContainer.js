import React from 'react';
import HomeNavigation from '../../components/HomeNavigation/HomeNavigation';
import NavigationComponent from '../../components/Navigation/NavigationComponent';
import RecipeGridComponent from '../../components/RecipeGridLayout/RecipeGridComponent';

import { connect } from 'react-redux';
import {findRandomRecipes, searchRecipes} from "../../actions/recipeAction";


// TODO: must be dynamic based on most recent info - eg show a row of recently reviewed or created recipes?
// TODO: must be dynamic basd on logged in user - eg show a row of user's recently saved recipes?
class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.findRandomRecipes()
    }

    componentDidUpdate() {
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
});

const mapPropsToDispatch = (dispatch) =>
    ({
        findRandomRecipes: ()=> findRandomRecipes(dispatch)
    })


export default connect(mapStateToProps, mapPropsToDispatch)(Home);
