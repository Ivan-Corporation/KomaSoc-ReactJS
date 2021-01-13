import DefaultPhoto from '../../assets/images/DefaultPhoto.png'
import styles from './Users.module.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
import * as axios from 'axios'




let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 0; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>

                {pages.map(p => {
                    return <span className={props.currentPage === p && styles.selectedPage}
                        onClick={() => { props.onPageChanged(p) }}>{p}</span>

                })}

            </div>

            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : DefaultPhoto} className={styles.userPhoto} />
                            </NavLink>
                        </div>


                        <div>
                            {u.followed
                                ? <button onClick={() => {

                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/users?follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "4ba4a295-a4e6-4c0d-a254-01bda40e5ba2"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }

                                        });

                                }}>Unfollow</button>


                                : <button onClick={() => {

                                    axios.post(`https://social-network.samuraijs.com/api/1.0/users?follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "4ba4a295-a4e6-4c0d-a254-01bda40e5ba2"
                                        }

                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id)

                                            }

                                        });

                                }}>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>

                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;