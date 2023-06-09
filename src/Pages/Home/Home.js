import React from 'react'

import UserCard from '../../Components/User Card/UserCard'

import styles from '../../Asssets/CSS/home.module.css'

const Home = () => {
    return (
        <div className={`${styles.home}`}>
            <svg id="wave" style={{transform: 'rotate(180deg)', transition: '0.3s'}} viewBox="0 0 1440 490" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stopColor="rgba(160, 32, 240, 1)" offset="0%"></stop><stop stopColor="rgba(0, 0, 255, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform: 'translate(0, 0px)', opacity:1}} fill="url(#sw-gradient-0)" d="M0,98L60,98C120,98,240,98,360,130.7C480,163,600,229,720,212.3C840,196,960,98,1080,114.3C1200,131,1320,261,1440,310.3C1560,359,1680,327,1800,334.8C1920,343,2040,392,2160,400.2C2280,408,2400,376,2520,334.8C2640,294,2760,245,2880,220.5C3000,196,3120,196,3240,228.7C3360,261,3480,327,3600,302.2C3720,278,3840,163,3960,98C4080,33,4200,16,4320,57.2C4440,98,4560,196,4680,196C4800,196,4920,98,5040,65.3C5160,33,5280,65,5400,65.3C5520,65,5640,33,5760,73.5C5880,114,6000,229,6120,228.7C6240,229,6360,114,6480,130.7C6600,147,6720,294,6840,318.5C6960,343,7080,245,7200,187.8C7320,131,7440,114,7560,147C7680,180,7800,261,7920,302.2C8040,343,8160,343,8280,318.5C8400,294,8520,245,8580,220.5L8640,196L8640,490L8580,490C8520,490,8400,490,8280,490C8160,490,8040,490,7920,490C7800,490,7680,490,7560,490C7440,490,7320,490,7200,490C7080,490,6960,490,6840,490C6720,490,6600,490,6480,490C6360,490,6240,490,6120,490C6000,490,5880,490,5760,490C5640,490,5520,490,5400,490C5280,490,5160,490,5040,490C4920,490,4800,490,4680,490C4560,490,4440,490,4320,490C4200,490,4080,490,3960,490C3840,490,3720,490,3600,490C3480,490,3360,490,3240,490C3120,490,3000,490,2880,490C2760,490,2640,490,2520,490C2400,490,2280,490,2160,490C2040,490,1920,490,1800,490C1680,490,1560,490,1440,490C1320,490,1200,490,1080,490C960,490,840,490,720,490C600,490,480,490,360,490C240,490,120,490,60,490L0,490Z"></path></svg>
            <div className={`${styles.accounts_info}`}>
                <div className={`${styles.heading}`}>
                    <h2>Select an account</h2>
                </div>
                <div className={`${styles.account__list}`}>
                    <div className={`${styles.account__list__inner}`}>
                        <UserCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
