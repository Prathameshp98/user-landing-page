import React from 'react'
import { Link } from "react-router-dom";

import styles from '../../Asssets/CSS/Components/User-Card/user-card.module.css'

import users_data from '../../Data/users.json'

const UserCard = () => {

    return (
        <>
            {users_data.users.map((eachUser, index) => {
                return (  
                    <Link to={"/profile/" + eachUser.id} style={{ textDecoration: 'none' }}>
                        <div className={`${styles.user__card}`} key={eachUser.id} >
                            <img src={eachUser.profilepicture} alt={eachUser.name} />
                            <p>{eachUser.name}</p>
                        </div>
                    </Link>
                )
            })}
        </>
    )
}

export default UserCard
