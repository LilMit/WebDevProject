import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import LoginService from '../../services/UserService';
import AlertComponent from '../Alert/AlertComponent';
import FormFieldComponent from '../FormField/FormFieldComponent';
import NavigationComponent from '../Navigation/NavigationComponent';
import style from './LoginComponent.module.css';
import { addUserAction } from '../../actions/userAction';

const LoginComponent = ({ addUserDispatchAction }) => {

    const intialState = {
        username: '',
        password: '',
        isUsernameUpdate: false,
        isPasswordUpdated: false,
        alert: 'd-none',
    };

    const [loginDetails, setLoginDetails] = useState(intialState);

    const history = useHistory();
    const updateUsername = (event) => {
        event.preventDefault();
        if(event.target.value.trim() === ''){
            setLoginDetails({
                ...loginDetails,
                username: event.target.value,
                isUsernameUpdate: false,
                alert: 'd-none'
            });
            return;
        }
        setLoginDetails({
            ...loginDetails,
            username: event.target.value,
            isUsernameUpdate: true,
            alert: 'd-none'
        });
    };

    const updatePassword = (event) => {
        event.preventDefault();
        if(event.target.value.trim() === ''){
            setLoginDetails({
                ...loginDetails,
                password: event.target.value,
                isPasswordUpdated: false,
                alert: 'd-none'
            });
            return;
        }
        setLoginDetails({
            ...loginDetails,
            password: event.target.value,
            isPasswordUpdated: true,
            alert: 'd-none'
        });
    };

    const clearAll = (event) => {
        event.preventDefault();
        setLoginDetails({
          ...intialState
        });
    }

    const cancel = (event) => {
        event.preventDefault();
        history.push('/home');
    };

    const verifyLogin = (event) => {
        event.preventDefault();
        // LoginService.validateUser(loginDetails.username, loginDetails.password).then((data) => {
        //     if(data) {
        //         addUserDispatchAction(data);
        //         history.push('/home');
        //     } else {
        //         setLoginDetails({
        //             ...intialState,
        //             alert: 'd-block',
        //         })
        //     }
        // }).catch((data) => {
        //     setLoginDetails({
        //         ...intialState,
        //         alert: 'd-block',
        //     })
        // });
        const user = LoginService.validateUser(loginDetails.username, loginDetails.password);
        addUserDispatchAction(user);
        history.push('/home');
    };

    const removeAlert = (event) => {
        event.preventDefault();
        setLoginDetails({
            ...setLoginDetails,
            alert: 'd-none',
        });
    };

    return(
        <div className={`${style.outlier}`}>
            <div className={style.custom_login_container}>
                <div className={`jumbotron row justify-content-center ${style.remove_margin}`}>
                    <h1> Log In </h1>
                </div>
                <AlertComponent
                    displayClass={loginDetails.alert}
                    cancelButtonHandler={removeAlert}
                    alertMessage = "Invalid username or password." />
                <FormFieldComponent
                    label = "Username"
                    placeholder = "Devansh"
                    inputValue = {loginDetails.username}
                    inputType = 'text'
                    id = 'username'
                    onChangeEventHandler = {updateUsername}
                    divClass = {style.remove_margin} />
                <FormFieldComponent
                    label = "Password"
                    placeholder = "QWERTasdfg"
                    inputValue = {loginDetails.password}
                    inputType = 'password'
                    id = 'password'
                    onChangeEventHandler = {updatePassword}
                    divClass = {style.remove_margin} />
                <div className={`form-group row ${style.remove_margin}`}>
                    { loginDetails.isUsernameUpdate && loginDetails.isPasswordUpdated && <button className={`btn btn-success col-sm ${style.margin_btn}`} onClick = {(event) => verifyLogin(event)}>Log In</button>}
                    { (!loginDetails.isUsernameUpdate || !loginDetails.isPasswordUpdated) && <button className= {`btn btn-success col-sm ${style.margin_btn}`} onClick = {(event) => verifyLogin(event)} disabled>Log In</button>}
                    <button className={`btn btn-danger col-sm ${style.margin_btn}`} onClick = {(event) => cancel(event)}>Cancel</button>
                    {  (loginDetails.isUsernameUpdate || loginDetails.isPasswordUpdated) &&  <button className={`btn btn-outline-secondary col-sm ${style.margin_btn}`} onClick = {(event) => clearAll(event)}>Clear</button>}
                    {  (!loginDetails.isUsernameUpdate && !loginDetails.isPasswordUpdated) &&  <button className={`btn btn-outline-secondary col-sm ${style.margin_btn}`} onClick = {(event) => clearAll(event)} disabled>Clear</button>}
                </div>
                <div className={`form-group row ${style.remove_margin}`}>
                    <div className="col-6">
                        <a href="#">Forgot Password?</a>
                    </div>
                    <div className="col-6">
                        <Link to="/signup" className="float-right">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
    addUserDispatchAction : (user) => addUserAction(dispatch, user),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);