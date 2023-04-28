/* eslint-disable eqeqeq */
import React from 'react'
import { useParams } from "react-router-dom"

import styles from '../../Asssets/CSS/Components/AccountCard/account-card.module.css'

import users_data from '../../Data/users.json'

const AccountCard = () => {

    const { userId } = useParams()

    return (
        <div className={`${styles.accountcard__main}`}>
            <div className={`${styles.accountcard__inner}`}>
                {users_data.users.filter(user => user.id == userId).map(filteredUser => {
                    return (
                        <div key={filteredUser.id} className={`${styles.accountcard__content}`}>
                            <img src={filteredUser.profilepicture} alt={filteredUser.id} />
                            <h6>{filteredUser.name}</h6>
                            <p>{filteredUser.email}</p>
                            {/* <div className={`${styles.accountcard__content__inner}`}>
                                <hr />
                                <div>
                                    <img src={filteredUser.profilepicture} alt={filteredUser.id} />
                                    <h6>{filteredUser.name}</h6>
                                </div>    
                                <hr />
                                <div>
                                    <img src={filteredUser.profilepicture} alt={filteredUser.id} />
                                    <h6>{filteredUser.name}</h6>
                                </div>   
                            </div>     */}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AccountCard
