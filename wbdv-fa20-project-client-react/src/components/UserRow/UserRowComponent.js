import React from 'react';
import {ReactComponent as Trash} from '../../images/Trash.svg';
import './UserRow.css';
import { Link } from 'react-router-dom';

const UserRowComponent = ({user, deleteUser, currentUser}) => {

    const location = {
        pathname: `/profile/${user._id}`,
        state: { user: user }
    };

    return (
        <tr className="wbdv-row wbdv-course">
                    <td>
                        <Link to={location} className="link"> 
                            <span className="text wbdv-row wbdv-title"> {user.username} </span> 
                        </Link>
                    </td>
                    <td>
                        { 
                        currentUser._id !== user._id &&
                            (<a href="#" className="link wbdv-row wbdv-button wbdv-delete float-right mr-3" onClick = {(event) => deleteUser(event, user._id)}> 
                                <Trash width="20px" height="20px" /> 
                            </a>)
                        }
                    </td>
        </tr>
    )
}

export default UserRowComponent;