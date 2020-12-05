import React, { useState } from 'react';
import AlertComponent from '../Alert/AlertComponent';
import FormFieldComponent from '../FormField/FormFieldComponent';
import UserService from '../../services/UserService';
import style from './SignUpComponent.module.css';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { addUserAction } from '../../actions/userAction';

const SignUpComponent = ({ addUserDispatchAction }) => {

    const history = useHistory();

    const intialState = {
        username: '',
        password: '',
        email: '',
        firstname: '',
        lastname: '',
        isUsernameUpdated: false,
        isPasswordUpdated: false,
        isEmailUpdated: false,
        isFirstnameUpdated: false,
        isLastnameUpdated: false,
        alert: 'd-none',
        alertMessage: 'Cannot add user. All field are required.',
    };
    
    const [signUpDetails, setSignUpDetails] = useState(intialState);

    const removeAlert = (event) => {
        event.preventDefault();
        setSignUpDetails({
            ...signUpDetails,
            alert: 'd-none',
            alertMessage: 'Cannot add user. All field are required.',
        });
    };

    const clearAll = (event) => {
        event.preventDefault();
        setSignUpDetails({
          ...intialState
        });
    }

    const cancel = (event) => {
        event.preventDefault();
        history.push('/home');
    };

    const signUp = (event) => {
        event.preventDefault();
        const user = {
            username: signUpDetails.username,
            password: signUpDetails.password,
            email: signUpDetails.email,
            firstname: signUpDetails.firstname,
            lastname: signUpDetails.lastname,
        }
        UserService.addUser(user).then((data) => {
            console.log('data1', data);
            if(data) {
                addUserDispatchAction(data);
                history.push('/home');
            } else {
                setSignUpDetails({
                    ...intialState,
                    alert: 'd-block',
                })
            }
        }).catch((data) => {
            if(data === -1){
                setSignUpDetails({
                    ...signUpDetails,
                    username: '',
                    alert: 'd-block',
                    alertMessage: 'Username is already taked enter another one.'
                })
                return;
            }
            setSignUpDetails({
                ...signUpDetails,
                alert: 'd-block',
            });
        });
    };

    const updateUsername = (event) => {
        event.preventDefault();
        if(event.target.value.trim() === ''){
            setSignUpDetails({
                ...signUpDetails,
                username: event.target.value,
                isUsernameUpdated: false,
                alert: 'd-none'
            });
            return;
        }
        setSignUpDetails({
            ...signUpDetails,
            username: event.target.value,
            isUsernameUpdated: true,
            alert: 'd-none'
        });
    };

    const updatePassword = (event) => {
        event.preventDefault();
        if(event.target.value.trim() === ''){
            setSignUpDetails({
                ...signUpDetails,
                password: event.target.value,
                isPasswordUpdated: false,
                alert: 'd-none'
            });
            return;
        }
        setSignUpDetails({
            ...signUpDetails,
            password: event.target.value,
            isPasswordUpdated: true,
            alert: 'd-none'
        });
    };

    const updateFirstName = (event) => {
        event.preventDefault();
        if(event.target.value.trim() === ''){
            setSignUpDetails({
                ...signUpDetails,
                firstname: event.target.value,
                isFirstnameUpdated: false,
                alert: 'd-none'
            });
            return;
        }
        setSignUpDetails({
            ...signUpDetails,
            firstname: event.target.value,
            isFirstnameUpdated: true,
            alert: 'd-none'
        });
    };

    const updateLastName = (event) => {
        event.preventDefault();
        if(event.target.value.trim() === ''){
            setSignUpDetails({
                ...signUpDetails,
                lastname: event.target.value,
                isLastnameUpdated: false,
                alert: 'd-none'
            });
            return;
        }
        setSignUpDetails({
            ...signUpDetails,
            lastname: event.target.value,
            isLastnameUpdated: true,
            alert: 'd-none'
        });
    };

    const updateEmail = (event) => {
        event.preventDefault();
        if(event.target.value.trim() === ''){
            setSignUpDetails({
                ...signUpDetails,
                email: event.target.value,
                isEmailUpdated: false,
                alert: 'd-none'
            });
            return;
        }
        setSignUpDetails({
            ...signUpDetails,
            email: event.target.value,
            isEmailUpdated: true,
            alert: 'd-none'
        });
    };

    const isSignUpEnabled = (signUpDetails.isUsernameUpdated && signUpDetails.isPasswordUpdated
                            && signUpDetails.isLastnameUpdated && signUpDetails.isFirstnameUpdated
                            && signUpDetails.isEmailUpdated);
    const isClearEnabled = (signUpDetails.isUsernameUpdated || signUpDetails.isPasswordUpdated
                            || signUpDetails.isLastnameUpdated || signUpDetails.isFirstnameUpdated
                            || signUpDetails.isEmailUpdated);
    return (
        <div className={`${style.outlier}`}>
            <div className={`${style.custom_sign_up_container}`}>
            <div className={`jumbotron row justify-content-center ${style.remove_margin}`}>
                    <h1> Sign Up </h1>
            </div>
            <AlertComponent
                displayClass={signUpDetails.alert}
                cancelButtonHandler={removeAlert}
                alertMessage =  {signUpDetails.alertMessage}/>
            <FormFieldComponent
                    label = "Username"
                    placeholder = "John"
                    inputValue = {signUpDetails.username}
                    inputType = 'text'
                    id = 'username'
                    onChangeEventHandler = {updateUsername}
                    divClass = {style.remove_margin} />
            <FormFieldComponent
                    label = "Password"
                    placeholder = "QWERTasdfg"
                    inputValue = {signUpDetails.password}
                    inputType = 'password'
                    id = 'password'
                    onChangeEventHandler = {updatePassword}
                    divClass = {style.remove_margin} />
            <FormFieldComponent
                label = "Firstname"
                placeholder = "John"
                inputValue = {signUpDetails.firstname}
                inputType = 'text'
                id = 'firstName'
                onChangeEventHandler = {updateFirstName}
                divClass = {style.remove_margin} />
            <FormFieldComponent
                label = "Lastname"
                placeholder = "Wick"
                inputValue = {signUpDetails.lastname}
                inputType = 'text'
                id = 'lastName'
                onChangeEventHandler = {updateLastName}
                divClass = {style.remove_margin} />
            <FormFieldComponent
                label = "Email"
                placeholder = "John_Wick@email.com"
                inputValue = {signUpDetails.email}
                inputType = 'email'
                id = 'email'
                onChangeEventHandler = {updateEmail}
                divClass = {style.remove_margin} />
             <div className={`form-group row ${style.remove_margin}`}>
                { isSignUpEnabled && <button className={`btn btn-success col-sm ${style.margin_btn}`} onClick = {(event) => signUp(event)}>Sign Up</button>}
                { !isSignUpEnabled && <button className= {`btn btn-success col-sm ${style.margin_btn}`} onClick = {(event) => signUp(event)} disabled>Sign Up</button>}
                <button className={`btn btn-danger col-sm ${style.margin_btn}`} onClick = {(event) => cancel(event)}>Cancel</button>
                { isClearEnabled &&  <button className={`btn btn-outline-secondary col-sm ${style.margin_btn}`} onClick = {(event) => clearAll(event)}>Clear</button>}
                { !isClearEnabled &&  <button className={`btn btn-outline-secondary col-sm ${style.margin_btn}`} onClick = {(event) => clearAll(event)} disabled>Clear</button>}
            </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
    addUserDispatchAction : (user) => addUserAction(dispatch, user),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpComponent);