import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/css/menu.scss';
import { NavLink } from "react-router-dom";

/**
 * Header menu function
 * 
 * @returns 
 */

export function menu(){
    
    function openMenu() { 
        console.log('Toggle Menu');
        const menuVis = document.querySelector('.menu__wrapper')
        // menuVis.style.visibility = 'visible';
        menuVis.classList.toggle('menu__wrapper--toggle');        
      }
    function closeMenu(){
        console.log('Close Menu');
        const menuVis = document.querySelector('.menu__wrapper')
        // menuVis.style.visibility = 'hidden';   
        menuVis.classList.toggle('menu__wrapper--toggle');          
    }

    return (
        <div className='menu'>
            <div className='menu__title' onClick={openMenu}>MENU</div>
            <div className='menu__wrapper menu__wrapper--toggle'>
                <div className='menu__overlay'></div>
                <div className='menu__content'>
                    <ul>
                        <li><NavLink to="/history">History</NavLink></li>
                        <li>Settings</li>
                        <li>Help</li>
                    </ul>
                </div>
                <span className='menu__close' onClick={closeMenu}>X</span>
            </div>
        </div>       
    );
}