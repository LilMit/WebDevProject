import React from 'react';
import {searchRecipes, updateQuery} from "../../actions/recipeAction";
import {connect} from 'react-redux';
import {Link} from "react-router-dom";


// TODO handle search call here

const HomeNavigation = ({query, update, search}) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="justify-content-center" id="recipeNav">
                {/*enter to submit form will not execute search*/}
                <form className="form-inline my-2 my-lg-0">

                    <input className="form-control mr-1 mr-sm-2" type="search" name="query" placeholder="Search"
                           aria-label="Search" onChange={(event)=>update(event.target.value)}/>
                    <Link to={`/search/${query}`} className="btn btn-outline-success nav-link my-2 my-sm-0">Search</Link>

                </form>
            </div>
        </nav>
    );
}

const mapStateToProps = (state) => ({
    recipes: state.recipeReducer.recipes,
    query: state.recipeReducer.query
})

const mapPropsToDispatch = (dispatch) => ({
    update : (query) => updateQuery(dispatch, query),
    search : (query) => searchRecipes(dispatch, query)
})

export default connect(mapStateToProps, mapPropsToDispatch) (HomeNavigation);

