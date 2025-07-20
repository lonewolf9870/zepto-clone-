import React from 'react';
import {Link} from 'react-router-dom';
function Navbar(){
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to ="/cart">Cart</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/shop">Shop</Link>
        </div> 
    )
}

export default Navbar