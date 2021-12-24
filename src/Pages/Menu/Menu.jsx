import { React, useState, useEffect } from 'react';
import { client } from '../../client';
import MenuItem from './MenuItem/MenuItem';
import piscoSour from '../../ Images/piscoSour.webp';
import ceviche from '../../ Images/ceviche.jpeg';
import gyoza from '../../ Images/Gyoza.jpeg'

import {  GiAbstract019 } from 'react-icons/gi';
import {  FaBullseye } from 'react-icons/fa';

import pattern from '../../ Images/pattern.jpeg';
import pattern2 from '../../ Images/pattern4.jpeg';

import './Menu.css';
import Nav from '../../Nav/Nav';

function Menu() {

    const [ menuItems, setMenuItems ] = useState([]);
    const [ hotItems, setHotItems ] = useState([]);
    const [ drinkItems, setDrinkItems ] = useState([]);
    const [ coldItems, setColdItems ] = useState([]);


    useEffect(() => {
        client.getEntries()
        .then((response) => {
           setMenuItems(response.items)
        }).then(() => {
            filterMenuItemsAndPlaceInArray('drink', setDrinkItems)
            filterMenuItemsAndPlaceInArray('hotPlates', setHotItems)
            filterMenuItemsAndPlaceInArray('coldPlates', setColdItems)
            console.log(menuItems)
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


      if (menuItems.length === 0) {
        return <div> <h1>LOADING...</h1></div>
      }
    
    return (
       
      
        <div className="Menu">
            <Nav classname={'navMenu'} />
            <div className="menu_header">
                <h3>Food & Drinks</h3>
                <h1>MENU</h1>
                <p>Peruvian restaurant with a focus on Nikkei</p>
                <ul className="menu-links">
                    <li><a href="#drinks"><FaBullseye />&nbsp;DRINKS</a></li>
                    <li><a href="#cold"><FaBullseye />&nbsp;COLD DISHES</a></li>
                    <li><a href="#warm"><FaBullseye />&nbsp;WARM DISHES</a></li>
                </ul>
            </div>
            <div className="menu_drinks" id="drinks">
                <div>
                    <h3 >Drinks</h3>
                    <h2> <GiAbstract019 />&nbsp;COCKTAILS & WINES&nbsp;<GiAbstract019 /></h2>
                    <p> Wines from Peru, self-made cocktails, beer and much more... you're journey to Peru starts here. </p>
                    {drinkItems.map(((item, index) => 
                    ( <MenuItem key={index} item={item}/>)
                    ))}
                </div>
                <div className="container_image">
                    <img src={pattern} />
                    <img src={piscoSour} />
                </div>
            </div>
            <div className="menu_food">
                <div className="container_image">
                <img src={pattern2} />
                    <img src={ceviche} />
                </div>
                <div id="cold">
                    <h3>Ceviches & More</h3>
                    <h2><GiAbstract019 />&nbsp;COLD PLATES&nbsp;<GiAbstract019 /></h2>
                    <p> Aromatic Peruvian ingredients prepared the Japanese way. </p>
                    {coldItems.map(((item, index) => 
                    ( <MenuItem key={index} item={item}/>)
                    ))}
                </div>
            </div>
            <div className="menu_food">
                <div id="warm">
                    <h3>Dishes to delight in</h3>
                    <h2><GiAbstract019 />&nbsp;HOT PLATES&nbsp;<GiAbstract019 /></h2>
                    <p> Aromatic Peruvian ingredients prepared the Japanese way. </p>
                    {hotItems.map(((item, index) => 
                    ( <MenuItem key={index} item={item}/>)
                    ))}
                </div>
                <div className="container_image">
                    <img src={pattern} />
                    <img src={gyoza} />
                </div>
            </div>
        </div>
    )
}

export default Menu
