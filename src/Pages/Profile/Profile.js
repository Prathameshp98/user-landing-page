import React from 'react'
import { useParams } from "react-router-dom"


const Profile = () => {

    const { user } = useParams()

    return (
        <div>{user}'s Profile</div>
    )
}

export default Profile