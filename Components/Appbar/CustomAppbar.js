import React from 'react';
import './Appbar.css'
import { Link } from 'react-router-dom';
const CustomAppbar = () => {
  return (
    <div>
      <div className='customappbar'>

    
         <div className='left-components'>
        <button className='logo-btn'> Yoga Studio </button>
        </div>
         <div className='right-components'>
            <Link to='/log'>
        <button className='login-btn2'> Login </button></Link>
        </div>
        <div className='center-components'>
            <Link to='/log2'>
        <button className='btn3'> Logout </button></Link>
        </div>
        

      </div>

    </div>
  );
}

export default CustomAppbar;
