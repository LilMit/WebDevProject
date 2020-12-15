import React, { useState } from 'react';
import {searchRecipes, updateQuery} from "../../actions/recipeAction";
import {connect} from 'react-redux';
import {Link, useHistory} from "react-router-dom";


// TODO handle search call here

const HomeNavigation = ({update, search}) => {

    const history = useHistory();
    const [query, setQuery] = useState('');

    const handleKeyDown = (event) => {
        if(event.key === 'Enter') {
            event.preventDefault();
            event.target.blur();
            update(query);
            history.push({pathname: `/search/${query}`});
        }
    }

    const handleButtonClick = (event) => {
        event.preventDefault();
        event.target.blur();
        update(query);
        history.push({pathname: `/search/${query}`});
    }

    // const updateQuery = (event) => {
    //     event.preventDefault();
    //     setQuery()
    // }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="justify-content-center" id="recipeNav">
                {/*enter to submit form will not execute search*/}
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-1 mr-sm-2" type="search" name="query" placeholder="Search"
                            value={query} aria-label="Search" onChange={(event)=>setQuery(event.target.value)} onKeyDown={(event) =>handleKeyDown(event)}/>
                    <button type = "button" className="btn btn-outline-success nav-link my-2 my-sm-0" onClick={(event) => handleButtonClick(event)}>Search</button>
                </form>
            </div>
        </nav>
    );
}

const mapStateToProps = (state) => ({
    recipes: state.recipeReducer.recipes,
})

const mapPropsToDispatch = (dispatch) => ({
    update : (query) => updateQuery(dispatch, query),
    search : (query) => searchRecipes(dispatch, query)
})

export default connect(mapStateToProps, mapPropsToDispatch) (HomeNavigation);

