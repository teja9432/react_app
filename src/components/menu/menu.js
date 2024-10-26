import React from 'react'
import Link from 'next/link';
import './menu.css';
export const Menu = () => {
  const menuItems=[
    {
      text:"Home",
      path:"/home"
    },{
      text:"About",
      path:"/about"
    },{
      text:"Contact",
      path:"/contact"
    }
  ]
  return <div className='menu'>{
    menuItems.map((obj,ind)=>{
      const{text,path}=obj
        return <Link className='links' key={"link_" +ind} href={path}>{text}</Link>
    })
   }
   </div>
   
  
}
