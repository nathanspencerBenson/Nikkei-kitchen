import React from 'react';
import './MenuItem.css';

function MenuItem({ item }) {

    const { name, featuredImage, description, price } = item.fields
    return (
        <div className="menu-item">
            <div>
                <h4>{name}</h4>
                
                <p className="price">  €{price}</p>
            </div>
            <p>{description}</p>
            
        </div>
    )
}

export default MenuItem
