import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
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
import SavedRecipiesContainer from './container/SavedRecipies/SavedRecipiesContainer';
import OwnedRecipiesContainer from './container/OwnedRecipies/OwnedRecipiesContainer';

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
            <Route path="profile/:userId" exact>
              <NavigationComponent />
            </Route>
            <Route path="/home" component = {Home} exact />
            <Route path="/savedRecipies/:userId" component = {SavedRecipiesContainer} exact />
            <Route path="/ownedRecipies/:userId" component = {OwnedRecipiesContainer} exact />
            <Route path="/">
              <Redirect to="/login" />
            </Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default CustomRoutes;
