/* eslint-disable eqeqeq */
import React from 'react'
import { useParams } from "react-router-dom"

import Entry from '../Entry/Entry'

import styles from '../../Asssets/CSS/Components/Information/information.module.css'

import map from '../../Asssets/images/map.webp'

import users_data from '../../Data/users.json'

const Information = () => {

    // stores the url params
    const { userId } = useParams()

    return (
        <div className={`${styles.information__main}`}>
            {users_data.users.filter(user => user.id == userId).map(filteredUser => {
                return (
                    <div key={filteredUser.id} className={`${styles.information__inner}`}>
                        <div className={`${styles.information__inner__left}`}>
                            <div className={`${styles.information__general}`}>
                                <img src={filteredUser.profilepicture} alt={filteredUser.id} />
                                <h6>{filteredUser.name}</h6>
                                <div className={`${styles.outer}`}>
                                    <Entry name={'Username'} value={filteredUser.name}/>
                                    <Entry name={'e-mail'} value={filteredUser.email}/>
                                    <Entry name={'Phone'} value={filteredUser.phone}/>
                                    <Entry name={'Website'} value={filteredUser.website}/>
                                </div> 
                            </div>
                            <div className={`${styles.information__company}`}>
                                <p style={{textAlign: 'center'}}>Company</p>
                                <div className={`${styles.outer}`}>
                                    <Entry name={'Name'} value={filteredUser.company.name}/>
                                    <Entry name={'catchphase'} value={filteredUser.company.catchPhrase}/>
                                    <Entry name={'bs'} value={filteredUser.company.bs}/>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.information__inner__right}`}>
                            <div className={`${styles.information__address}`}>
                                <p style={{paddingLeft: '17%'}}>Address:</p>
                                <div className={`${styles.outer}`}>
                                    <Entry name={'Street'} value={filteredUser.address.street}/>
                                    <Entry name={'Suite'} value={filteredUser.address.suite}/>
                                    <Entry name={'City'} value={filteredUser.address.city}/>
                                    <Entry name={'Zipcode'} value={filteredUser.address.zipcode}/>
                                </div> 
                                <div className={`${styles.information__address__map}`}>
                                    <img src={map} alt="map" />
                                    <p>Lat: <span>{filteredUser.address.geo.lat}</span>&nbsp;&nbsp;&nbsp; Long: <span>{filteredUser.address.geo.lng}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Information
