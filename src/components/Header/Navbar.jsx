import React from 'react';
import { Link, NavLink } from 'react-router';
import './Header.css'
import Logo from '../../assets/logo.png'

const Navbar = () => {

    const handleGitHubClick = () => {
    window.open("https://github.com/nokib-web", "_blank");
  };





    return (
        <div className="navbar bg-base-100 px-4 md:px-8 lg:px-12 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/apps'>Apps</NavLink></li>
                        <li><NavLink to='/installation'>Installation</NavLink></li>


                        
                    </ul>
                </div>
                <Link to='/' className=" flex items-center font-bold text-blue-600 text-xl"> <span><img className='max-h-[40px]' src={Logo} alt="" /></span>  HERO.IO</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/apps'>Apps</NavLink></li>
                    <li><NavLink to='/installation'>Installation</NavLink></li>

                  
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn" onClick={handleGitHubClick}>Contributes</a>
            </div>
        </div>

    );
};

export default Navbar;