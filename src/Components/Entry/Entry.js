import React from 'react'

import styles from '../../Asssets/CSS/Components/Entry/entry.module.css'

const Entry = (props) => {

    return (
        <div className={`${styles.inner}`}>
            <div className={`${styles.inner__left}`}>
                <p>{props.name} &nbsp;&nbsp; : </p>
            </div>
            <div className={`${styles.inner__right}`}>
                <h6>{props.value}</h6>
            </div>
        </div>
    )
}

export default Entry
