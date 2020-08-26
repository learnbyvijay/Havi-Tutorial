import React from 'react'
import {Link} from 'react-router-dom'
const Navbar =()=>{
	return(
		
		<nav>
	
		    <div className="nav-wrapper white">
		      <Link to="/" className="brand-logo left">Havi-tutorial</Link>
		      <ul id="nav-mobile" className="right">
		      	<li><Link to="/">Home</Link></li>
		        <li><Link to="/Signin">Signin</Link></li>
		        <li><Link to="/Signup">Signup</Link></li>
		        <li><Link to="/Profile">Profile</Link></li>
		        <li><Link to="/Createpost">Crestepost</Link></li>
		      </ul>
		    </div>
		  </nav>
	)
}
export default Navbar;

