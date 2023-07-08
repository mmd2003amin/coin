import React from 'react';

const Card = ({image , about , header}) => {
    return (
        <div>
            <img src={image} alt="image" />
            <h1>{header}</h1>
            <p>{about}</p>
        </div>
    );
};

export default Card;