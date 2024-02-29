import React from 'react'
import NavLink from './Navlink'

const MenuOverlay = ({links}) => {
  return (
    <ul className='flex flex-col py-3 leading-[35px] items-center text-xxl mt-0 '>
        {links.map((link, index) => (
            <li key={index}>
            <NavLink href={link.path} title ={link.title} />
            </li>
        )) }
    </ul>
  )
}

export default MenuOverlay