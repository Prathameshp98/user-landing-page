import React, { useState } from 'react'

import Sidebar from '../../Components/Sidebar/Sidebar'
import UserInfo from '../../Components/User Info/UserInfo'
import Chat from '../../Components/Chat/Chat'

import styles from '../../Asssets/CSS/profile.module.css'

const Profile = () => {

    const[option, setOption] = useState({
        profile: true,
        posts: false,
        gallery: false,
        todo: false
    })

    const optionHandler = (element) => {
        setOption(element)
    }

    return (
        <>  
            <div className={`${styles.profile__main}`}>
                <div className={`${styles.profile__inner}`}>
                    <Sidebar optionHandler={optionHandler} option={option} />
                    <UserInfo option={option}/>
                </div>
                <Chat />
            </div>
        </>
        
    )
}

export default Profile