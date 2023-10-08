import React from 'react'
import { IoBriefcaseOutline,IoPeople,IoPerson,IoStatsChart,IoFolderOpenOutline } from "react-icons/io5"
import '../infoBox/infobox.css'
const InfoBox = (props) => {
  return (
    <div className='bx'>
     <h1>{props.title}</h1>
     <p>{props.status}</p>
     <button>View More</button>
    </div>
  )
}

export default InfoBox