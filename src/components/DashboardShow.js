import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import ProfileShow from './ProfileShow'
import CrewList from './CrewList'

export default function DashboardShow(props) {
    return (
        <div className='dashboard-profile-container'>
            <ProfileShow user={ props.user }/>
            <CrewList crew={ props.crew } />
        </div>
    )
}
