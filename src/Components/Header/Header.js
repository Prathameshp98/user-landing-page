/* eslint-disable eqeqeq */
import React from 'react'
import { useParams } from "react-router-dom"

import styles from '../../Asssets/CSS/Components/Header/header.module.css'

import users_data from '../../Data/users.json'

const Header = (props) => {

    const { userId } = useParams()
    console.log(userId)

    return (
        <div className={`${styles.header__main}`}>
            <div className={`${styles.header__left}`}>
                {props.option.profile ? <h2>Profile</h2> 
                : (props.option.posts ? <h2>Posts</h2> 
                : (props.option.gallery ? <h2>Gallery</h2> 
                : <h2>ToDo</h2>))}
            </div>
            <div className={`${styles.header__right}`}>
                {users_data.users.filter(user => user.id == userId).map(filteredUser => {
                    return (
                        <div key={filteredUser.id} className={`${styles.header__right__inner}`}>
                            <img src={filteredUser.profilepicture} alt={filteredUser.name} />
                            <p>{filteredUser.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Header
