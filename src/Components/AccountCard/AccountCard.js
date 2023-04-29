/* eslint-disable eqeqeq */
import React from 'react'
import { useParams, Link } from "react-router-dom"

import styles from '../../Asssets/CSS/Components/AccountCard/account-card.module.css'

import users_data from '../../Data/users.json'

const AccountCard = (props) => {

    const { userId } = useParams()

    const cardCloseHandler = () => {
        props.visibilityHandler(false)
    }

    return (
        <div className={`${styles.accountcard__main}`}>
            <div className={`${styles.accountcard__inner}`}>
                {users_data.users.filter(user => user.id == userId).map(filteredUser => {
                    return (
                        <div key={filteredUser.id} className={`${styles.accountcard__content}`}>
                            <img src={filteredUser.profilepicture} alt={filteredUser.id} />
                            <h6>{filteredUser.name}</h6>
                            <p>{filteredUser.email}</p>
                            <div className={`${styles.accountcard__content__inner}`}>
                                {users_data.users.filter(user => user.id != userId).filter(user => user.id != userId).map(filteredUser => {
                                    return (
                                        <div key={filteredUser.id}>
                                            <hr />
                                            <Link to={"/profile/" + filteredUser.id} style={{ textDecoration: 'none' }} onClick={cardCloseHandler}>
                                                <div className={`${styles.accountcard__content__inner__2}`}>
                                                    <img src={filteredUser.profilepicture} alt={filteredUser.id} />
                                                    <h6>{filteredUser.name}</h6>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })}  
                            </div>
                            <Link to={"/"} style={{ textDecoration: 'none' }} >
                                <button className={`${styles.signout}`}>Sign out</button>   
                            </Link> 
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AccountCard
