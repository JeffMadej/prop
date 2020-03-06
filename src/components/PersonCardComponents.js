import React from 'react';


const PersonCard = ({firstName, lastName, age, hairColor}) => {
    const style={
        border: '1px solid black'
    }
    return(
        <div style={style} className="card col-5 mx-auto">
            <h2>{lastName}, {firstName}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
    )

}


export default PersonCard;