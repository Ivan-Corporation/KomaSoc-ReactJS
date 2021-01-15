import { connect } from "react-redux";
import { follow, setCurrentPage, setUsers, unfollow, setTotalUsersCount, toogleIsFetching, toogleFollowingProgress, getUsersThunkCreator } from "../../redux/users-reducer";
import * as axios from 'axios'
import React from 'react'
import Users from './Users';
import Preloader from "../common/preloader/Preloader";
import { getUsers } from "../../api/api";


class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.getUsersThunkCreator();

        // this.props.toogleIsFetching(true);

        // getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.toogleIsFetching(false);
        //     this.props.setUsers(data.items);
        //     this.props.setTotalUsersCount(data.totalCount);
        // });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toogleIsFetching(true);

        getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toogleIsFetching(false);
            this.props.setUsers(data.items);

        });
    }



    render() {

        return <>
            {this.props.isFetching ?
                <Preloader />
                : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toogleFollowingProgress={this.props.toogleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}




let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}







export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toogleIsFetching,
    toogleFollowingProgress,
    getUsersThunkCreator,

})
    (UsersContainer);
