import React from 'react'
import LeftSidebar from '../components/LeftSidebar'
import MessageList from '../components/MessageList'
import Nav from '../components/Nav'
import ProfileShow from '../components/ProfileShow'

export default function Dashboard() {
    return (
        <div>
            <Nav />
            <div className='dashboard-mid-container'>
                <LeftSidebar />
                <ProfileShow />
                <MessageList />
            </div>
        </div>
    )
}
