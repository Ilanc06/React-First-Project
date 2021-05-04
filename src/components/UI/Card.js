import './Card.css';
import React from 'react';

const Card = (props) => {
    const classes = 'card ' + props.className                    //Passing the two classes names
    return <div className={classes}>{props.children}</div>;
}

export default Card;