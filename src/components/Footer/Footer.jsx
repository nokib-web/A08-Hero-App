import React from 'react';
import Logo from '../../assets/logo.png'
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
                <aside>
                
                       <img className='max-h-[80px]' src={Logo} alt="" />
                    
                    <p className='text-2xl'>
                        <span className='text-blue-500 text-2xl font-bold'><Link to='/'>HERO.IO </Link></span>Tech Industries Ltd.
                        <br />
                        Providing reliable <br /> tech solutions since 2015
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>

            <aside className=' footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4'>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by HERO.IO Tech Industries Ltd</p>
            </aside>

        </div>
    );
};

export default Footer;