import React from 'react'
import reactStringReplace from 'react-string-replace';

export const NamesList = (props) => {
    return (
        <p>{reactStringReplace(props.names, 'Bogdan Kozyrskiy', (match, i) => (
            <span key={i} className='bold'>{match}</span>
        ))}</p>
    )
}
