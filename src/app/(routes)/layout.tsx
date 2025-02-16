import React from 'react'
import Navbar from '../(auth)/components/Navbar'

interface RouteslayoutProps {
    children:React.ReactNode
}

const Routeslayout = ({children}:RouteslayoutProps) => {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'> 
      {children}
      </div>
      footer
    </>
  )
}

export default Routeslayout
