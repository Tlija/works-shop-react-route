import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <ul style={{dispaly:'flex',justifyContent:"space-around"}}>
            <li>
                <Link to= '/'>home</Link>
            </li>
        
            <li>
                <Link to= '/login'>login</Link>
            </li> 
             <li>
                <Link to= '/signup'>signup</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar