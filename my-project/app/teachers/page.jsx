import React from 'react'
import "../teachers/teacher.css"
import Card from './(components)/card/card'
const Teacher = () => {
  return (
    <div className='teacher'> 
    
      <div className="table">
        <h1>Teacher Performance</h1>
        <div className="table">
          <div className="thead">
            <h2>Teacher Name</h2>
            <h2>Batch Teachs</h2>
            <h2>No Of Students</h2>
            <h2>Attendence</h2>
          </div>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>

      </div>
      </div>
  )
}

export default Teacher