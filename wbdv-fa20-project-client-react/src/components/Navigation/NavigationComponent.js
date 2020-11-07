import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import $ from 'jquery';
import style from './NavigationComponent.module.css';
import NavigationTabsComponent from '../NavigationTabs/NavigationTabsComponent';

const NavigationComponent = ({
    
}) => {

    let history = useHistory();

    const allTabs = [{
        tabName: 'Home',
        tabPath: 'home',
        isSelected: false,
    },{
        tabName: 'Saved Recipies',
        tabPath: 'savedRecipies',
    },{
        tabName: 'Your Recipies',
        tabPath: 'yourRecipies'
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

    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
            <span className="navbar-brand">
                <Link to="/home" className={`${style.title_link} ml-3`}>
                    Recipies
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
                            return <NavigationTabsComponent 
                                        tabName={tab.tabName}
                                        tabPath={tab.tabPath}
                                        currentPath={history.location.pathname}
                                        history={history}/>
                        })
                    }
                </ul>
                <form class="form-inline">
                    <Link to = "/login" className="btn btn-primary my-2 my-sm-0 mr-2" type="button">Login</Link>
                    <Link to = "/signup" className="btn btn-info my-2 my-sm-0" type="button">Sign Up</Link>
                    <button className="btn btn-outline-danger my-sm-0 ml-2" type="button">Logout</button>
                </form>
            </div>
        </nav>
    );

};

export default NavigationComponent;