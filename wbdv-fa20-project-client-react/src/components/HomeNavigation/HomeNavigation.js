import React from 'react';
import {searchRecipes, updateQuery} from "../../actions/recipeAction";
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";



const HomeNavigation = ({query, update, search}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="justify-content-center" id="recipeNav">
                {/*<form action="/search/" className="form-inline my-2 my-lg-0">*/}
                {/*    <input className="form-control mr-1 mr-sm-2" type="search" name="query" placeholder="Search" aria-label="Search"/>*/}
                {/*    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>*/}
                {/*</form>*/}
                {/*<form className="form-inline my-2 my-lg-0" onSubmit={()=><Redirect to={ `/search/${query}`}/>}>*/}
                    <form className="form-inline my-2 my-lg-0" onSubmit={()=>search({query})}>
                    <input className="form-control mr-1 mr-sm-2" type="search" name="query" placeholder="Search"
                           aria-label="Search" onChange={(event)=>update(event.target.value)}/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
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
    // redirectToSearchPage : (query) => render(){return (<Redirect to={ `/search/${query}`}/>)}
})

export default connect(mapStateToProps, mapPropsToDispatch) (HomeNavigation);
