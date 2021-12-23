import { React, useState, useEffect } from 'react';
import { client } from '../../client';
import MenuItem from './MenuItem/MenuItem';

function Menu() {

    const [ menuItems, setMenuItems ] = useState([]);
    const [ foodItems, setFoodItems ] = useState([]);
    const [ drinkItems, setDrinkItems ] = useState([]);


    useEffect(() => {
        client.getEntries()
        .then((response) => {
           setMenuItems(response.items)
           filterMenuItemsAndPlaceInArray('drink', setDrinkItems)
           filterMenuItemsAndPlaceInArray('foodItem', setFoodItems)
           console.log(drinkItems)
          
        })
        .catch(console.error)
      }, []);

      const filterMenuItemsAndPlaceInArray = (itemType, array) => {
        var newArray = menuItems.filter(function(item)
            {
                return item.sys.contentType.sys.id == itemType;
            });
        array(newArray);
        
      };



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
