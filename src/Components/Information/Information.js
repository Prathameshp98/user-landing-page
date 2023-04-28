import React from 'react'

import styles from '../../Asssets/CSS/Components/Information/information.module.css'

const Information = () => {
    return (
        <div className={`${styles.information__main}`}>
            <div className={`${styles.information__inner}`}>
                <div className={`${styles.information__inner__left}`}>
                    <div className={`${styles.information__general}`}>
                        General
                    </div>
                    <div className={`${styles.information__company}`}>
                        Company
                    </div>
                </div>
                <div className={`${styles.information__inner__right}`}>
                    <div className={`${styles.information__address}`}>
                        Address
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information
