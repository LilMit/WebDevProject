import React from 'react';
import HomeNavigation from '../../components/HomeNavigation/HomeNavigation';
import NavigationComponent from '../../components/Navigation/NavigationComponent';
import RecipeGridComponent from '../../components/RecipeGridLayout/RecipeGridComponent';

import { connect } from 'react-redux';
import {findRandomRecipes, searchRecipes} from "../../actions/recipeAction";
import RecipeService from '../../services/RecipeService';


// TODO: must be dynamic based on most recent info - eg show a row of recently reviewed or created recipes?
// TODO: must be dynamic basd on logged in user - eg show a row of user's recently saved recipes?
class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.findRandomRecipes();
        RecipeService.fetchRecentRecipes(this.props.userId).then((data) => {
            if(data && !data.error) {
                this.props.fetchRecentRecipes(data);
            }
        }).catch((data) => {
            console.log(data);
        });
    }

    componentDidUpdate() {
        RecipeService.fetchRecentRecipes(this.props.userId).then((data) => {
            if(data && !data.error) {
                if(this.props.recentRecipes.length !== data.length) {
                    this.props.fetchRecentRecipes(data);
                }
            }
        }).catch((data) => {
            console.log(data);
        });
    }

    render() {
        return (
            <>
                <NavigationComponent/>
                <div>
                    <HomeNavigation/>
                    {this.props.userId && <div className="container m-1">
                        <h3> Recently interacted Recipes</h3>
                        <RecipeGridComponent recipes={this.props.recentRecipes}/>
                    </div>}
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
        findRecentRecipes: (recipe) => findRecentRecipes(dispatch)
    })


export default connect(mapStateToProps, mapPropsToDispatch)(Home);
