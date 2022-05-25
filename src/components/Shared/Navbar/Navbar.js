import React from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Navbar.css';

const Navbar = () => {
	const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
      };

	const menuItems = <>
		
		<li><Link to = '/'>Home</Link></li>
		<li><Link to = '#'>Item </Link></li>
		
		<li><Link to = '/about'> About </Link></li>
		{/* <li><Link to='/login'> Login </Link></li>  */}
		<li>{user ? <button className="btn btn-ghost"  onClick={logout} >Sign Out</button> : <Link to="/login">Login</Link>}</li>
		
	</>

	return (
		<div className="navbar bg-primary px-16 text-white">
			<div className="navbar-start">
				<div className="dropdown bg-primary">
					<label tabindex="0" className="btn btn-ghost lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path  d="M4 6h16M4 12h8m-8 6h16" /></svg>
					</label>
					<ul tabindex="0" className="menu menu-compact dropdown-content mt-2 p-2 shadow bg-primary rounded-box w-52">
						{menuItems}
					</ul>
				</div>
				<Link to = '/' className="btn btn-ghost normal-case text-xl"> Computer Parts </Link>
			</div>
			<div className="hidden lg:flex">
				<ul className="menu menu-horizontal">
					{menuItems}
				</ul>
			</div>
		</div>
	);
};

export default Navbar;