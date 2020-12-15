import React from 'react'

export default function CrewList(props) {
    return (
        <div>
            <h1>Crew List</h1>
            <div>
                {props.crew.map((crew)=>
                <div className='dash-crew-container' key={crew.id}>
                    <img className='dash-crew-img' src={crew.imgURL} alt='member' />
                    <h4>{crew.firstName}</h4>
                    <p>{crew.about}</p>
                </div>
                )}
            </div>
            
        </div>
    )
}
