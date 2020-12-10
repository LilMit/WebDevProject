import React from 'react';
import {connect} from 'react-redux';
import NavigationComponent from '../../components/Navigation/NavigationComponent';
import TableComponent from '../../components/UserTable/UserTableComponent';
import UserService from '../../services/UserService';

class AllUsers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        UserService.getAllUsers(this.props.user._id).then((users) => {
            if (users && !users.error) {
                this.setState(prevState => ({
                    ...prevState,
                    users: users,
                }));
            }
        });
    }

    deleteUser = (event, userId) => {
        event.preventDefault();
        UserService.deleteUser(userId).then(data => {
            if (data && !data.error) {
                this.setState(prevState => ({
                    ...prevState,
                    users: prevState.users.filter(oldUser => oldUser._id !== userId),
                }));
            }
        });
    }

    render() {
        return (
            <>
                <NavigationComponent/>
                <TableComponent users={this.state.users} deleteUser={this.deleteUser} currentUser={this.props.user}/>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.userReducer,
});

export default connect(mapStateToProps)(AllUsers);
