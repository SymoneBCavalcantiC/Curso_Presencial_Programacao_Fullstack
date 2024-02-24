import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <nav>
        <Link to="/">Inicial</Link><br/>
        <Link to="/a-faculdade">A Faculdade</Link><br/>
        <Link to="/dpo-lgpd">LGPD</Link><br/>
        <Link to="/noticias">Noticias</Link><br/>
    </nav>
  )
}

export default Navbar