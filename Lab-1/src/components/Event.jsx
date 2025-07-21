import React from 'react';
const Event = (props) =>{
    return(
        <td className= {`Event ${props.color} ${props.location}`} >
            <h5>{props.event}</h5>
            <p>{props.location}</p>
        </td>   
    )
}

export default Event;
