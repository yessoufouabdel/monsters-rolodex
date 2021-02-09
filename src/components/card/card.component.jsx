import React from 'react';

import './card.styles.css'

export const Card = props => (
    <div className='card-container'>
        <img alt="user" src={`https://robohash.org/${props.user.id}?set=set2`} />
        <h2>{props.user.name}</h2>
        <h2>{props.user.email}</h2>
    </div>
);