import React from 'react'
import { FaSearch, FaBell, } from 'react-icons/fa';
import { CiSettings } from 'react-icons/ci';
import { BiUserCircle } from 'react-icons/bi';
import Image from 'next/image';
import '../navbar/navbar.css'
import InfoBox from './infoBox/infoBox';
const Navbar = () => {
    return (
        <>
            <div className="nav">
                <div className='left'>
                    <div className='username'>
                        <span>Good After Noon, </span> Ahmad Raza
                    </div>
                    <div className="date">
                        8,October2023
                    </div>
                </div>
                <div className="right">
                    <div className="search">
                        <span><FaSearch /></span>
                        <input type="text" placeholder='Search' />
                    </div>
                    <div className="settings">
                        <FaBell />
                        <CiSettings />
                        <span className='user'>
                            < BiUserCircle />
                        </span>
                    </div>
                </div>

            </div>
            <div className="info">
                <div className="data">
                   <div className="text">
                   <h1>Check Your Student's Activites <br/>& Live Updates</h1>
                    <p>Recent Activites of Your Students Who Didn't attend in School today & About The Issue </p>
                   </div>
                   <div className="boxInfo">
                   <InfoBox title="Total Students"status="9293"/>
                   <InfoBox title="Total Courses"status="15"/>
                   <InfoBox title="Total Teachers"status="25"/>

               
                   </div>
                </div>
            </div>


        </>

    )
}

export default Navbar