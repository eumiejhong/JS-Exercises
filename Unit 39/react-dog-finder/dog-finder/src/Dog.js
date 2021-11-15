import React from 'react';
import {useParams} from 'react-router-dom';

const Dog = ({dogs}) => {
    const {slug} = useParams();
    const {name, src, age, facts} = dogs.find((dog) => dog.src === slug);
    
    return (
        <div>
        <h4>Dog: {name}</h4>
        <img src={`/images/dogs/${src}.jpg`} />
        <h3>Age: {age}</h3>
        <ul>
            {facts.map(
                (fact) => <li>{fact}</li>
            )}
        </ul>
        </div>
    )
}


export default Dog;