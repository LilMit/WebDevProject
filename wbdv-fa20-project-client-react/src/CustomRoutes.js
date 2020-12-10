import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { combineReducers, createStore } from 'redux';
import LoginComponent from './components/Login/LoginComponent';
import NavigationComponent from './components/Navigation/NavigationComponent';
import SignUpComponent from './components/Signup/SignUpComponent';
import Home from './container/Home/HomeContainer';
import './CustomRoutes.css';
import { reducer } from './reducers/initialState';
import { userReducer } from './reducers/userReducer';
import { recipeReducer } from './reducers/recipeReducer';
import AllUsers from './container/Users/AllUsers';
import ProfileComponent from './components/Profile/ProfileComponent';
import OwnedRecipesContainer from './container/OwnedRecipes/OwnedRecipesContainer';
import SavedRecipesContainer from './container/SavedRecipes/SavedRecipesContainer';

import RecipeDetails from "./container/RecipeDetails/RecipeDetails";

import CreateRecipeComponent from './components/CreateRecipe/CreateRecipeComponent';


const reducers = combineReducers({
  reducer,
  recipeReducer,
  userReducer,
});

const store = createStore(reducers , window.__REDUX_DEVTOOLS_EXTENSION__ 
  && window.__REDUX_DEVTOOLS_EXTENSION__());

class CustomRoutes extends React.Component {
  
  
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/login"  component = {LoginComponent} exact />
            <Route path="/signup" component = {SignUpComponent} exact />
            <Route path="/profile/:userId" exact>
              <NavigationComponent />
              <ProfileComponent />
            </Route>
            <Route path="/home" component = {Home} exact />
            <Route path="/users" component = { AllUsers } exact />
            <Route path="/savedRecipes/:userId" component = {SavedRecipesContainer} exact />
            <Route path="/ownedRecipes/:userId" component = {OwnedRecipesContainer} exact />

            <Route path="/recipe/:recipeId" component = {RecipeDetails} exact />
            <Route path="/ownedRecipes/:userId/create" component = {CreateRecipeComponent} exact />
            <Route path="/">
              <Redirect to="/home" />
            </Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default CustomRoutes;
