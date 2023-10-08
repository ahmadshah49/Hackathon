import React from 'react'
import "../students/students.css"
import Table from './components/table/table'
const Students = () => {
  return (
    <>
    <div className="students">
      <h1>Students</h1>
      <div className="table">
        <div className='tHead'>
        <h2>Student Name </h2>
        <h2>Father Name </h2>
        <h2>Roll No </h2>
        <h2>Course </h2>
        <h2>Function </h2>
        </div>
        <Table/>
        <Table/>
        <Table/>
        <Table/>
        <Table/>
        <Table/>
        <Table/>
        <Table/>
        <Table/>
        <Table/>
        
      </div>
    </div>
    </>
  )
}

export default Students
