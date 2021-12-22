import { React, useState, useEffect } from 'react';
import { client } from '../../client';
import MenuItem from './MenuItem/MenuItem';

function Menu() {

    const [ menuItems, setMenuItems ] = useState([]);

    useEffect(() => {
        client.getEntries()
        .then((response) => {
            console.log(response);
           setMenuItems(response.items)
        })
        .catch(console.error)
      }, []);

    return (
        <div>

            <p>Menu</p>
            {menuItems.map(((item, index) => 
               ( <MenuItem key={index} name={item.fields.name} description={item.fields.description} price={item.fields.price} img={item.fields.featuredImage.fields.file.url}/>)
            ))}
        </div>
    )
}

export default Menu
