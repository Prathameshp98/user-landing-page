import React, { useEffect, useState } from 'react'

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
    const[scroll, setSroll] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setSroll(false)
        }, [1000])
    })

    const optionHandler = (element) => {
        setOption(element)
    }

    // sets the state for scroll to true when the page is scrolled
    const handleScroll = () => {
        setSroll(true)
    }

    return (
        <>  
            <div className={`${styles.profile__main}`} onScroll={handleScroll}>
                <div className={`${styles.profile__inner}`}>
                    <Sidebar optionHandler={optionHandler} option={option} />
                    <UserInfo option={option} scroll={scroll}/>
                </div>
                <Chat />
            </div>
        </>
        
    )
}

export default Profile