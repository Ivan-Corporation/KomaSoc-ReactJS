import Profile from './Profile';
import React from 'react'
import * as axios from 'axios'
import { connect } from 'react-redux';
import { getUserProfile, getStatus,updateStatus } from './../../redux/profile-reducer'
import { Redirect, withRouter } from 'react-router-dom'
import { compose } from 'redux';



class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            <Redirect to={'/login'}/>;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter
)(ProfileContainer);