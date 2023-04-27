import React from 'react'
import { useParams } from "react-router-dom"

import Chat from '../../Components/Chat/Chat'

import styles from '../../Asssets/CSS/profile.module.css'

const Profile = () => {

    const { user } = useParams()

    return (
        <>  
            <div className={`${styles.profile__main}`}>
                <div className={`${styles.profile__inner}`}>

                </div>
                <Chat />
            </div>
        </>
        
    )
}

export default Profile