import React from 'react';
import './MenuItem.css';

function MenuItem({ item }) {

    const { name, featuredImage, description, price } = item.fields
    return (
        <div className="menu-item">
            <h1>{name}</h1>
            {featuredImage && <img src={featuredImage.fields.file.url}/>}
            <p>{description}</p>
            <p>{price}</p>
        </div>
    )
}

export default MenuItem
