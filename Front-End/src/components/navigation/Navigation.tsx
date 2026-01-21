import React from 'react';
import './Navigation.scss';
import { RiContactsBook3Fill } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import { GiSkills } from "react-icons/gi";
import { FaBookAtlas } from "react-icons/fa6";




export const Navigation: React.FC = () => {
    return (
        <>
            <header className='bg-dark'>
                <nav className='sidebar'>
                    <div className="container-fluid">
                        <div className=" flex-row-reverse" id='menu'>
                            <ul className='navbar-nav'>
                                <li className='nav-item' ><a className='nav-link text-white' href="#profil">
                                    <i className=" h1 text-softlinen "><ImProfile/></i></a></li>
                                <li className='nav-item' ><a className='nav-link text-white' href="#skills">
                                    <i className=" h1 text-softlinen "><GiSkills/></i></a></li>
                                <li className='nav-item' ><a className='nav-link text-white' href="#project">
                                    <i className=" h1 text-softlinen "><FaBookAtlas/></i></a></li>
                                <li className='nav-item' ><a className='nav-link text-white' href="#contact">
                                    <i className=" h1 text-softlinen "><RiContactsBook3Fill/></i></a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}