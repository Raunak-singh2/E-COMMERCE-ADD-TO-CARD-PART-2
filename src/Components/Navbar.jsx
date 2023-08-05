import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const items=useSelector((state)=>state.cart);
  return (
    <div style={{marginRight:20}}>
        <div style={{display:'flex',justifyContent:"space-between"}}>
            <Link to={"/"} style={{fontSize:20}}>Home</Link>
            <Link to={"/Cart"} style={{fontSize:20}}>Cart</Link>
            <span style={{textAlign:'right',fontSize:20}}>Items:{items.length}</span>
        </div>
    </div>
  )
}

export default Navbar;
