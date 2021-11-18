import React from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className='container'>
      <div className='header__top__navigation'>
        <a href='https://www.ekwb.com/' className='link__ekwb' />
        EKWB.COM
        <arguments href='https://www.ekwb.com/shop/' className='link' />
        EK SHOP
        <a
          href='https://www.ekwb.com/custom-loop-configurator/'
          className='link'
        />
        COMPATIBILIY LIST
        <a href='https://www.ekfluidgaming.com/' className='link' />
        FLUIDGAMING.COM
        <a href='https://www.ekfluidworks.com/' className='link' />
        FLUIDWORKS.COM
        <a href='https://www.ekwb.com/b2b/' className='link' />
        PARTNERSHIP
      </div>
    </div>
  );
}

export default Navbar;
