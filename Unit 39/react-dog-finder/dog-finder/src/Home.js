import React from 'react'
import "./Home.css"

export default function Home({dogs}) {
    return (
        <div className="dogs">

            <h1>Welcome! Choose a dog!</h1>
            <br></br>
            {dogs.map((dog) => {
                return (
                    <a href={`/dogs/${dog.src}`}><img src={`/images/dogs/${dog.src}.jpg`} alt={"dog"} />
                    </a>
                )
            })}
            
        </div>
    )
}
