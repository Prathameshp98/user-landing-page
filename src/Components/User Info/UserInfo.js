import React from 'react'

import Header from '../Header/Header'
import Information from '../Information/Information'
import ComingSoon from '../ComingSoon/ComingSoon'

import styles from '../../Asssets/CSS/Components/UserInfo/user-info.module.css'

const UserInfo = (props) => {
    return (
        <div className={`${styles.userinfo__main}`}>
            <Header />
            {props.option.profile ? <Information /> : <ComingSoon />}
        </div>
    )
}

export default UserInfo
