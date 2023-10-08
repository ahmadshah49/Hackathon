import React from 'react'
import { IoBriefcaseOutline,IoPeople,IoPerson,IoStatsChart,IoFolderOpenOutline } from "react-icons/io5";
import {BsFillDatabaseFill,FaFacebook } from 'react-icons/fa';
import '../sidebar/sidebar.css'
import Link from 'next/link';
const Sidebar = () => {
  return (
    <>
<nav className='sidebar'>
<h1>TYPI.</h1>
<ul className='sidebar-1'>
    <li><IoBriefcaseOutline/><Link href={"/dashborad"}>DashBorad</Link></li>
    <li><IoPeople/><Link href={"/students"}>Students</Link></li>
    <li><IoPerson/><Link href={"/teachers"}>Teachers</Link></li>
    <li><IoFolderOpenOutline/><Link href={"/assignment"}>Assignments</Link></li>
    <li><IoStatsChart/><Link href={"/attendence"}>Attendence</Link></li>
</ul>
</nav>
    </>
  )
}

export default Sidebar