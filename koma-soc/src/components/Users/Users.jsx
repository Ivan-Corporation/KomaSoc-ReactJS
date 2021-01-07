import styles from './Users.module.css'

let Users = (props) => {

    if (props.users.length === 0) {

        props.setUsers([
            { id: 1, photoUrl: 'https://i.pinimg.com/736x/0f/0c/23/0f0c23b71d75c9c00a5813808b65d2f0--warhammer-k-memes-warhammer-.jpg', followed: false, fullName: 'IvanKoma', status: 'Giraffes are heartless creatures', location: { city: 'AS', country: 'Russia' } },
            { id: 2, photoUrl: 'http://epicau.com/wp/wp-content/uploads/2017/01/eldarfarseer-564x430.jpg', followed: true, fullName: 'Dancha', status: 'broken legs...', location: { city: 'Volgograd', country: 'Russia' } },
            { id: 3, photoUrl: 'https://i.pinimg.com/236x/aa/79/e5/aa79e5ae7f9f8016ab9f2e6b5b36862b.jpg', followed: false, fullName: 'Alex', status: 'Warhammer 40000 best!', location: { city: 'AS', country: 'Russia' } },
            { id: 4, photoUrl: 'http://www.angel-spire.com/forum/uploads/monthly_12_2019/post-359-1575826066.png', followed: true, fullName: 'Churchill', status: 'Dead', location: { city: 'London', country: 'Great Britain' } },

        ])

    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto} />
                        </div>
                    </span>
                    <span>
                        <div>
                            {u.followed ?
                                <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> :
                                <button onClick={() => { props.follow(u.id) }}>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;