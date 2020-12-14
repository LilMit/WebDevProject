import React from 'react';
import HomeNavigation from '../../components/HomeNavigation/HomeNavigation';
import NavigationComponent from '../../components/Navigation/NavigationComponent';
import RecipeGridComponent from '../../components/RecipeGridLayout/RecipeGridComponent';

import { connect } from 'react-redux';
import {findRandomRecipes, findRecentRecipes} from "../../actions/recipeAction";
import RecipeService from '../../services/RecipeService';


// TODO: must be dynamic based on most recent info - eg show a row of recently reviewed or created recipes?
// TODO: must be dynamic basd on logged in user - eg show a row of user's recently saved recipes?
class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.findRandomRecipes();
        if(this.props.userId) {
            RecipeService.fetchRecentRecipes(this.props.userId).then((data) => {
                if(data && !data.error) {
                    this.props.findRecentRecipes(data);
                }
            }).catch((data) => {
                console.log(data);
            });
        }
    }

    componentDidUpdate() {
        if(this.props.userId) {
            RecipeService.fetchRecentRecipes(this.props.userId).then((data) => {
                if(data && !data.error) {
                    if(this.props.recentRecipes.length !== data.length) {
                        this.props.findRecentRecipes(data);
                    }
                }
            }).catch((data) => {
                console.log(data);
            });
        }
    }

    render() {
        return (
            <>
                <NavigationComponent/>
                <div>
                    <HomeNavigation/>
                    {
                    this.props.userId && this.props.recentRecipes && this.props.recentRecipes.length !== 0  &&
                        <div className="container mb-4 mt-4 p-auto border">
                            <h5> Recently interacted Recipes</h5>
                            <RecipeGridComponent recipes={this.props.recentRecipes}/>
                        </div>
                    }
                    <RecipeGridComponent recipes={this.props.recipes}/>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    userId: state.userReducer._id,
    recipes: state.recipeReducer.recipes,
    recentRecipes: state.recipeReducer.recentRecipes
});

const mapPropsToDispatch = (dispatch) =>
    ({
        findRandomRecipes: ()=> findRandomRecipes(dispatch),
        findRecentRecipes: (recipe) => findRecentRecipes(dispatch, recipe)
    })


export default connect(mapStateToProps, mapPropsToDispatch)(Home);
