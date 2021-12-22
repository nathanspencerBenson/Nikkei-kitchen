import React from 'react';
import './MenuItem.css';

function MenuItem(props) {
    return (
        <div className="menu-item">
            <h1>{props.name}</h1>
            {props.img && <img src={props.img}/>}
            <p>{props.description}</p>
            <p>{props.price}</p>
        </div>
    )
}

export default MenuItem
