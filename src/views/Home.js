import React from 'react'
import { Link } from 'react-router-dom'
import NewUser from '../components/NewUser'


export default function Home() {
    return (
        <div className='home-main-container'>
            <div className='home-title-about'>
                <h1>Welcome to Crew You</h1>
                <h3>Here at Crew You, we pride ourselves in empowering our members to unite as one. Touring and Local crew members can share stories, talk rates and look out for each other.</h3>
                <h4>Looking for work? Check out our Job Postings <Link to='/'>here!</Link></h4>
                <Link to='/newuser'>Create an account</Link><br></br>
                <Link to='/login'>Existing users sign in</Link>
            
            </div>
            <div>
                <h1>image</h1>
                <img url=''/>
            </div>
            <NewUser />
        </div>
    )
}
