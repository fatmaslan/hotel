import Link from 'next/link'
import React from 'react'


interface NavItemProps {
    title:string,
    url:string,
}
const NavItem = ({title,url}:NavItemProps) => {

  return (
    <Link href={url} className='text-white cursor-pointer'>
    
        {title}
   
    </Link>
  )
}

export default NavItem
