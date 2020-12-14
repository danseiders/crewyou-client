import React from 'react'

export default function CrewList(props) {
    return (
        <div>
            <h1>Crew List</h1>
            <div>
                {props.crew.map((crew)=>
                <div>{crew.firstName}</div>
                )}
            </div>
            
        </div>
    )
}
