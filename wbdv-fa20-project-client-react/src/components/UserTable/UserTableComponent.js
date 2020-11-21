import React, { useEffect } from 'react';
import UserRowComponent from '../UserRow/UserRowComponent';

const UserTableComponent = ({users = [] , deleteUser, currentUser}) =>  {

    const renderRowUsers = () => {
        if(users.length > 0) {
            return (
                <tbody>
                    {
                    users.map(user => <UserRowComponent 
                            user = {user} 
                            deleteUser = {deleteUser}
                            currentUser = {currentUser}  
                            />)
                    }
                </tbody>
            );
        }
        return null;
    };

    return (
        <div className = "container background-container overflow-auto">
            <table className = "table table-hover sticky-top">
                <thead className = "sticky-top">
                    <tr>
                        <th className="title wbdv-header wbdv-title">
                            Username
                        </th>
                    </tr>
                </thead>
                {renderRowUsers()}
            </table>
        </div>
    );
}

export default UserTableComponent;