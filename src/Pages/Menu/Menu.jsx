import { React, useState, useEffect } from 'react';
import { client } from '../../client';
import MenuItem from './MenuItem/MenuItem';

function Menu() {

    const [ menuItems, setMenuItems ] = useState([]);

    useEffect(() => {
        client.getEntries()
        .then((response) => {
            console.log(response.items);
           setMenuItems(response.items)
           menuItems.map(item => {
            //    console.log(item.sys.contentType.sys.id)
            console.log(item)
           })
        })
        .catch(console.error)
      }, []);

// var newArray = array.filter(function(item)
//  {
//   return conditional_statement;
//  });

    return (
        <div>

            <p>Menu</p>
            {menuItems.map(((item, index) => 
               ( <MenuItem key={index} item={item}/>)
            ))}
        </div>
    )
}

export default Menu
