import React from 'react'

import Sidebar from '../../Components/Sidebar/Sidebar'
import UserInfo from '../../Components/User Info/UserInfo'
import Chat from '../../Components/Chat/Chat'

import styles from '../../Asssets/CSS/profile.module.css'

const Profile = () => {

    return (
        <>  
            <div className={`${styles.profile__main}`}>
                <div className={`${styles.profile__inner}`}>
                    <Sidebar />
                    <UserInfo />
                </div>
                <Chat />
            </div>
        </>
        
    )
}

export default Profile