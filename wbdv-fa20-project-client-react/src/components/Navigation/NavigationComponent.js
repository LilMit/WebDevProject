import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import $ from 'jquery';
import style from './NavigationComponent.module.css';
import NavigationTabsComponent from '../NavigationTabs/NavigationTabsComponent';
import { connect } from 'react-redux';
import { deleteUserAction } from '../../actions/userAction';

const NavigationComponent = ({
    isLoggedIn,
    type,
    user_id,
    removeUserDispatchAction,
}) => {

    let history = useHistory();

    const allTabs = [{
        tabName: 'Home',
        tabPath: 'home',
        isSelected: false,
    },{
        tabName: 'Saved Recipes',
        tabPath: 'savedRecipes',
    },{
        tabName: 'Your Recipes',
        tabPath: 'ownedRecipes'
    },{
        tabName: 'Profile',
        tabPath: 'profile'
    },{
        tabName: 'All Users',
        tabPath: 'users'
    }];

    const toggleView = (event) => {
        event.preventDefault();
        $("#recipeNav").toggleClass("show");
    }

    const shouldRenderTab = (tab) => {
        switch(tab.tabName) {
            case 'Home':
                return true;
            case 'Profile':
                return isLoggedIn;
            case 'Saved Recipes':
                return isLoggedIn;
            case 'Your Recipes':
                return type === 'AUTHOR';
            case 'All Users':
                return type === 'ADMIN';
            default:
                return true;
        }
    }

    const logout = (event) => {
        event.preventDefault();
        removeUserDispatchAction();
        history.replace("/home", "urlhistory");
    };


    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
            <span className="navbar-brand">
                <Link to="/home" className={`${style.title_link} ml-3`}>
                    Recipes
                </Link>
            </span>
            <button className="navbar-toggler ml-1 mr-1" type="button" 
                data-toggle="collapse" data-target="#recipeNav" aria-controls="navbarNav" 
                aria-expanded="false" aria-label="Toggle navigation"
                onClick = {(event) => toggleView(event)}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="recipeNav">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    {
                        allTabs.map(tab => {
                            if(shouldRenderTab(tab)) {
                                return <NavigationTabsComponent 
                                            tabName={tab.tabName}
                                            tabPath={tab.tabPath}
                                            currentPath={history.location.pathname}
                                            history={history}
                                            user_id={user_id}/>
                            }
                            return null;
                        })
                    }
                </ul>
                <form class="form-inline">
                    {!isLoggedIn && <Link to = "/login" className="btn btn-primary my-2 my-sm-0 mr-2" type="button">Login</Link>}
                    {!isLoggedIn && <Link to = "/signup" className="btn btn-info my-2 my-sm-0" type="button">Sign Up</Link>}
                    {isLoggedIn && <button className="btn btn-outline-danger my-sm-0 ml-2" type="button" onClick={(event) => logout(event)}>Logout</button>}
                </form>
            </div>
        </nav>
    );

};

const mapStateToProps = (state) => ({
    isLoggedIn: state.userReducer.isLoggedIn,
    type: state.userReducer.type,
    user_id: state.userReducer._id,
});

const mapDispatchToProps = (dispatch) => ({
    removeUserDispatchAction: () => deleteUserAction(dispatch),
});

export default connect(mapStateToProps,mapDispatchToProps)(NavigationComponent);