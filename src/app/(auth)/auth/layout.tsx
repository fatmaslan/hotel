import React from 'react'


interface AuthLayoutProps {
    children:React.ReactNode
}

const Authlayout = ({children}:AuthLayoutProps) => {
  return (
    <div>
       Logo
      {children}
      Logo bitiş
    </div>
  )
}

export default Authlayout
