import React from 'react';

const HomeNavigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="justify-content-center" id="recipeNav">
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-1 mr-sm-2" type="search" placeholder="Search"
                           aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
};


export default (HomeNavigation);
