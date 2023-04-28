
import React, { useState } from 'react'

import styles from '../../Asssets/CSS/Components/Sidebar/sidebar.module.css'

import right from '../../Asssets/images/next.webp'

const Sidebar = () => {

    const[option, setOption] = useState({
        profile: true,
        posts: false,
        gallery: false,
        todo: false
    })

    const optionHandler = (element) => {
        if(element === 1){ setOption({profile: true, posts: false, gallery: false, todo: false}) }
        if(element === 2){ setOption({profile: false, posts: true, gallery: false, todo: false}) }
        if(element === 3){ setOption({profile: false, posts: false, gallery: true, todo: false}) }
        if(element === 4){ setOption({profile: false, posts: false, gallery: false, todo: true}) }
    }

    return (
        <div className={`${styles.sidebar__main}`}>
            <div className={`${styles.sidebar__inner}`}>
                <div className={`${styles.sidebar__list}`}>
                    <div className={`${styles.sidebar__item}`}>
                        <p className={`${option.profile && styles.active}`} onClick={() => optionHandler(1)}>Profile</p>
                        <div className={`${styles.shape}`} style={{display: !option.profile && 'none'}}>
                            <img src={right} alt="right arrow" />
                        </div>
                    </div>
                    <hr />
                    <div className={`${styles.sidebar__item}`}>
                    <p className={`${option.posts && styles.active}`} onClick={() => optionHandler(2)}>Posts</p>
                        <div className={`${styles.shape}`} style={{display: !option.posts && 'none'}}>
                            <img src={right} alt="right arrow" />
                        </div>
                    </div>
                    <hr />
                    <div className={`${styles.sidebar__item}`}>
                        <p className={`${option.gallery && styles.active}`} onClick={() => optionHandler(3)}>Gallery</p>
                        <div className={`${styles.shape}`} style={{display: !option.gallery && 'none'}}>
                            <img src={right} alt="right arrow" />
                        </div>
                    </div>
                    <hr />
                    <div className={`${styles.sidebar__item}`}>
                    <p className={`${option.todo && styles.active}`} onClick={() => optionHandler(4)}>ToDo</p>
                        <div className={`${styles.shape}`} style={{display: !option.todo && 'none'}}>
                            <img src={right} alt="right arrow" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
