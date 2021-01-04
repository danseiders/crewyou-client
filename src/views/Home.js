import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
    return (
        <div className='home-main-container'>
            <div className='home-title-about'>
                <h1>Welcome to Crew You!</h1>
                <p>Here at Crew You, we pride ourselves in empowering our members to unite as one. Touring and Local crew members can share stories, talk rates and look out for each other.</p>
                <h4>Looking for work? Check out our Job Postings <Link to='/'>here!</Link></h4>
                <Link to='/user/new'>Create an account</Link><br></br>
                <Link to='/login'>Existing users sign in</Link>
            
            </div>
            <div>
                <img className='home-title-img' src='https://s3.us-east-2.amazonaws.com/danseiders.crewyou/IMG_5314.jpg' alt='concert'/>
            </div>
            {/* <NewUser /> */}
        </div>
    )
}
