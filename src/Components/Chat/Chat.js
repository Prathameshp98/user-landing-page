/* eslint-disable eqeqeq */
import React, { useState } from 'react'
import { useParams } from "react-router-dom"

import styles from '../../Asssets/CSS/Components/Chat/chat.module.css'

import chat from '../../Asssets/images/chat-bubbles.webp'
import arrow from '../../Asssets/images/down.webp'

import users_data from '../../Data/users.json'

// import randomNumbers from '../../Utils/random-number'

const Chat = () => {

    const { userId } = useParams()

    const[isChatOpen, setChatOpen] = useState(false)
    // eslint-disable-next-line no-unused-vars
    const[randomNum, setRandomNum] = useState([1, 3, 4, 8])


    const chatHandler = () => {
        setChatOpen(!isChatOpen)
    }

    return (
        <div className={`${styles.chat__main}`}>
            <div className={`${styles.chat__hidden} ${!isChatOpen && styles.closed__chat}`}>
                <div className={`${styles.top__bar}`} onClick={chatHandler}>
                    <div className={`${styles.top__bar__left}`}>
                        <img src={chat} alt="chat-img" />
                        <p>Chats</p>
                    </div>
                    <img className={`${!isChatOpen && styles.closed__img}`} src={arrow} alt="arrow"/>
                </div>
                <div className={`${styles.users__list} ${!isChatOpen && styles.closed__list}`}>
                    {users_data.users.filter(user => user.id != userId).map(filteredUser => {
                        return (
                            <div key={filteredUser.id}>
                                <div className={`${styles.users__list__inner}`} key={filteredUser.id}>
                                    <div className={`${styles.user}`} >
                                        <img src={filteredUser.profilepicture} alt={filteredUser.name} />
                                        <p>{filteredUser.name.length > 15 ? filteredUser.name.substring(0,15) + '...' : filteredUser.name}</p>
                                    </div>
                                    <div className={`${styles.online__status} ${randomNum.includes(filteredUser.id) ? styles.online : ''}`}></div>
                                </div>  
                            </div>
                        )
                    })}
           
                </div>
            </div>
        </div>
    )
}

export default Chat
