import React, { useEffect, useState } from 'react';
import AlertComponent from '../Alert/AlertComponent';
import FormFieldComponent from '../FormField/FormFieldComponent';
import UserService from '../../services/UserService';
import style from './ProfileComponent.module.css';
import { useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { addUserAction } from '../../actions/userAction';

let intialState;

const Profile = ({ addUserDispatchAction , loggedInUser}) => {

    if(!intialState) {
        intialState = {
            ...loggedInUser,
            isUsernameUpdated: false,
            isPasswordUpdated: false,
            isEmailUpdated: false,
            isFirstnameUpdated: false,
            isLastnameUpdated: false,
            isRoleChanged: false,
            alert: 'd-none',
            alertMessage: 'Something Went wrong.',
        };
    }

    const history = useHistory();
    const params = useParams();

    useEffect(() => {
    
        if(!loggedInUser._id){
            history.push('/home');
        }

        if(loggedInUser._id !== params.userId && loggedInUser.type !== 'ADMIN') {
            history.push(`/profile/${loggedInUser._id}`);
        }

        if(history.location.state && history.location.state.user) {
            const { user } = history.location.state;
            UserService.getUserById(user._id).then((data) => {
                if(data.error) {
                    setProfileDetails({
                        ...intialState,
                        alert: 'd-block',
                    });
                } else {
                    intialState = {
                        ...intialState,
                        ...data,
                    };
                    setProfileDetails(intialState);
                }
            });
        }

    }, loggedInUser);
    
    const [profileDetails, setProfileDetails] = useState(intialState);

    const removeAlert = (event) => {
        event.preventDefault();
        setProfileDetails({
            ...profileDetails,
            alert: 'd-none',
            alertMessage: 'Cannot add user. All field are required.',
        });
    };

    const clearAll = (event) => {
        event.preventDefault();
        setProfileDetails({
          ...intialState
        });
    }

    const cancel = (event) => {
        event.preventDefault();
        history.push('/home');
    };

    const updateProfile = (event) => {
        event.preventDefault();
        const user = {
            _id: profileDetails._id,
            username: profileDetails.username,
            password: profileDetails.password,
            email: profileDetails.email,
            firstname: profileDetails.firstname,
            lastname: profileDetails.lastname,
        };
        UserService.updateUser(user._id, user).then((data) => {
            if(data && !data.error) {
                if(profileDetails.isRoleChanged) {
                    UserService.updateUserRole(loggedInUser._id, user._id, profileDetails.type)
                    .then((updatedRole) => {
                        if(updatedRole && !updatedRole.error) {
                            if(updatedRole._id !== loggedInUser._id) {
                                setProfileDetails({
                                    ...intialState,
                                    ...updatedRole,
                                });
                            } else {
                                addUserDispatchAction(updatedRole);
                            }
                        } else {
                            debugger
                            setProfileDetails({
                                ...intialState,
                                alert: 'd-block',
                            })
                        }
                    });
                } else {
                    if(data._id !== loggedInUser._id) {
                        setProfileDetails({
                            ...intialState,
                            ...data,
                        });
                    } else {
                        addUserDispatchAction(data);
                    }
                }
            } else {
                setProfileDetails({
                    ...intialState,
                    alert: 'd-block',
                })
            }
        }).catch((data) => {
            if(data === -1){
                setProfileDetails({
                    ...profileDetails,
                    alert: 'd-block',
                    alertMessage: 'Error while updating data'
                })
                return;
            }
            setProfileDetails({
                ...profileDetails,
                alert: 'd-block',
            });
        });
    };

    const updateUsername = (event) => {
        event.preventDefault();
        if(event.target.value.trim() === ''){
            setProfileDetails({
                ...profileDetails,
                username: event.target.value,
                isUsernameUpdated: false,
                alert: 'd-none'
            });
            return;
        }
        setProfileDetails({
            ...profileDetails,
            username: event.target.value,
            isUsernameUpdated: true,
            alert: 'd-none'
        });
    };

    const updateUserRole = (event) => {
        event.preventDefault();
        setProfileDetails({
            ...profileDetails,
            type: event.target.value,
            isRoleChanged: true,
        });
        return;
    }

    const updatePassword = (event) => {
        event.preventDefault();
        if(event.target.value.trim() === ''){
            setProfileDetails({
                ...profileDetails,
                password: event.target.value,
                isPasswordUpdated: false,
                alert: 'd-none'
            });
            return;
        }
        setProfileDetails({
            ...profileDetails,
            password: event.target.value,
            isPasswordUpdated: true,
            alert: 'd-none'
        });
    };

    const updateFirstName = (event) => {
        event.preventDefault();
        if(event.target.value.trim() === ''){
            setProfileDetails({
                ...profileDetails,
                firstname: event.target.value,
                isFirstnameUpdated: false,
                alert: 'd-none'
            });
            return;
        }
        setProfileDetails({
            ...profileDetails,
            firstname: event.target.value,
            isFirstnameUpdated: true,
            alert: 'd-none'
        });
    };

    const updateLastName = (event) => {
        event.preventDefault();
        if(event.target.value.trim() === ''){
            setProfileDetails({
                ...profileDetails,
                lastname: event.target.value,
                isLastnameUpdated: false,
                alert: 'd-none'
            });
            return;
        }
        setProfileDetails({
            ...profileDetails,
            lastname: event.target.value,
            isLastnameUpdated: true,
            alert: 'd-none'
        });
    };

    const updateEmail = (event) => {
        event.preventDefault();
        if(event.target.value.trim() === ''){
            setProfileDetails({
                ...profileDetails,
                email: event.target.value,
                isEmailUpdated: false,
                alert: 'd-none'
            });
            return;
        }
        setProfileDetails({
            ...profileDetails,
            email: event.target.value,
            isEmailUpdated: true,
            alert: 'd-none'
        });
    };

    const isClearEnabled = (profileDetails.isUsernameUpdated || profileDetails.isPasswordUpdated
                            || profileDetails.isLastnameUpdated || profileDetails.isFirstnameUpdated
                            || profileDetails.isEmailUpdated|| profileDetails.isRoleChanged);

    return (
        <div className={`${style.outlier}`}>
            <div className={`${style.custom_sign_up_container}`}>
            <div className={`jumbotron row justify-content-center ${style.remove_margin}`}>
                    <h1> Profile </h1>
            </div>
            <AlertComponent
                displayClass={profileDetails.alert}
                cancelButtonHandler={removeAlert}
                alertMessage =  {profileDetails.alertMessage}/>
            <FormFieldComponent
                    label = "Username"
                    placeholder = "John"
                    inputValue = {profileDetails.username}
                    inputType = 'text'
                    id = 'username'
                    onChangeEventHandler = {updateUsername}
                    disabled = {true}
                    divClass = {style.remove_margin} />
            <FormFieldComponent
                    label = "Password"
                    placeholder = "QWERTasdfg"
                    inputValue = {profileDetails.password}
                    inputType = 'password'
                    id = 'password'
                    onChangeEventHandler = {updatePassword}
                    divClass = {style.remove_margin} />
            <FormFieldComponent
                label = "Firstname"
                placeholder = "John"
                inputValue = {profileDetails.firstname}
                inputType = 'text'
                id = 'firstName'
                onChangeEventHandler = {updateFirstName}
                divClass = {style.remove_margin} />
            <FormFieldComponent
                label = "Lastname"
                placeholder = "Wick"
                inputValue = {profileDetails.lastname}
                inputType = 'text'
                id = 'lastName'
                onChangeEventHandler = {updateLastName}
                divClass = {style.remove_margin} />
            <FormFieldComponent
                label = "Email"
                placeholder = "John_Wick@email.com"
                inputValue = {profileDetails.email}
                inputType = 'email'
                id = 'email'
                onChangeEventHandler = {updateEmail}
                divClass = {style.remove_margin} />
            <div className={`form-group row ${style.remove_margin}`}>
                <div className="col-sm-2 col-form-label">
                    <span>Role</span>
                </div>
                <div className="col-sm-10">
                    {
                        loggedInUser.type === 'ADMIN' ? 
                        (
                            <select className="custom-select w-100 mr-1 mt-1 mt-sm-0" value={profileDetails.type} onChange = {(event) => updateUserRole(event)}>
                                <option value="ADMIN" selected={profileDetails.type === 'ADMIN'}>ADMIN</option>
                                <option value="AUTHOR" selected={profileDetails.type === 'AUTHOR'}>AUTHOR</option>
                                <option value="BROWSING" selected={profileDetails.type === 'BROWSING'}>BROWSING</option>
                            </select>
                        ) : (
                            <select className="custom-select w-100 mr-1 mt-1 mt-sm-0" value={profileDetails.type} onChange = {(event) => updateUserRole(event)} disabled>
                                <option value="ADMIN" selected={profileDetails.type === 'ADMIN'}>ADMIN</option>
                                <option value="AUTHOR" selected={profileDetails.type === 'AUTHOR'}>AUTHOR</option>
                                <option value="BROWSING" selected={profileDetails.type === 'BROWSING'}>BROWSING</option>
                            </select>
                        )
                    }
                </div>
            </div>
             <div className={`form-group row ${style.remove_margin}`}>
                { isClearEnabled && <button className={`btn btn-success col-sm ${style.margin_btn}`} onClick = {(event) => updateProfile(event)}>Update</button>}
                { !isClearEnabled && <button className= {`btn btn-success col-sm ${style.margin_btn}`} onClick = {(event) => updateProfile(event)} disabled>Update</button>}
                <button className={`btn btn-danger col-sm ${style.margin_btn}`} onClick = {(event) => cancel(event)}>Cancel</button>
                { isClearEnabled &&  <button className={`btn btn-outline-secondary col-sm ${style.margin_btn}`} onClick = {(event) => clearAll(event)}>Clear Changes</button>}
                { !isClearEnabled &&  <button className={`btn btn-outline-secondary col-sm ${style.margin_btn}`} onClick = {(event) => clearAll(event)} disabled>Clear</button>}
            </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    loggedInUser: state.userReducer,
});

const mapDispatchToProps = (dispatch) => ({
    addUserDispatchAction : (user) => addUserAction(dispatch, user),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);