import React from 'react'

export default function CrewList(props) {
    return (
        <div>
            <h1>Crew List</h1>
            <div>
                {props.crew.map((crew)=>
                <div className='dash-crew-container' key={crew.id} id={crew.id}>
                    <img className='dash-crew-img' src={crew.imgURL} alt='member' />
                    <div>
                        <h4>{crew.firstName} {crew.lastName} - {crew.airport}<br></br>{crew.position1}</h4>
                        <p>{crew.about}</p>
                    </div>
                </div>
                )}
            </div>
            
        </div>
    )
}
