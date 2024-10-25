import React from 'react'
import NavBar from './NavBar'

const MenuPrincipal = () => {
    console.log(localStorage.getItem('user'));
  return (
    <div>
        <NavBar/>
      

    </div>
  )
}

export default MenuPrincipal