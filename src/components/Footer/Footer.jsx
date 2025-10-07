import React from 'react';
import Logo from '../../assets/logo.png'

import { FaFacebookSquare, FaGithub, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router';
import { TiBusinessCard } from 'react-icons/ti';

const Footer = () => {

    // Social Links
      const handleFacebookIcon = () => {
    window.open("https://www.facebook.com/NokibHasan.Nazmul", "_blank");
      }
      const handleYouTubeIcon = () => {
    window.open("https://www.youtube.com/", "_blank");
      }
    
    const handleGitHubClick = () => {
    window.open("https://github.com/nokib-web", "_blank");
  };
    const handleClick = () => {
    window.open("https://www.facebook.com/profile.php?id=61579797098515", "_blank");
  };

  

    return (
        <div>
            <footer className="footer sm:footer-horizontal  bg-base-300 text-base-content p-10">
                <aside>
                
                       <img className='max-h-[80px] pl-25 ' src={Logo} alt="" />
                    
                    <p className='text-2xl'>
                        <span className=' text-2xl font-bold'><Link to='/'><span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text'>HERO.IO </span></Link></span>Tech Industries Ltd.
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
                    <a className="link link-hover">Legal policy</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <a onClick = {handleFacebookIcon} className="my-1"><FaFacebookSquare /></a>
                    <a onClick = {handleYouTubeIcon} className="my-1"><FaYoutube /></a>
                    <a onClick = {handleGitHubClick} className="my-1"><FaGithub /></a>
                    <a onClick = {handleClick} className="my-1"><TiBusinessCard /></a>
                  
                </nav>
            </footer>

            <aside className=' footer sm:footer-horizontal footer-center bg-gray-200 text-base-content p-4'>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by HERO.IO Tech Industries Ltd</p>
            </aside>

        </div>
    );
};

export default Footer;