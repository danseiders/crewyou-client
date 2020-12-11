import React from 'react'

export default function ProfileShow() {
    return (
        <div className='dashboard-profile-container'>
            <div className='profile-header'>
                <img src='' alt='user'></img>
                <h2>Name:</h2>
                <h3>Airport:</h3>
            </div>
            <div className='profile-details'>
                <h4>About:</h4>
                <h4>Positions:</h4>
                <h4>Touring or Local:</h4>
                <h4>Availability:</h4>
            </div>
        </div>
    )
}
