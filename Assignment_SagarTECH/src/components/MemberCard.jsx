import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MemberCard.css';

export const MemberCard = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/employees');
        setEmployees(response.data);
      } catch (error) {
        console.error('Failed to fetch employees', error);
      }
    };
    fetchEmployees();
  }, []);

  const cardStyle = {
    backgroundColor: '#f0f0f0', // Light gray background for visibility
    border: '1px solid #ddd',
    padding: '1rem',
    margin: '0.5rem 0',
    borderRadius: '5px',
  };

  const textStyle = {
    color: 'black', // Set text color to black
  };

  return (
    <div>
  
      {employees.length === 0 ? (
        <p style={textStyle}>No employees available</p>
      ) : (
        employees.map((employee) => (
          <div key={employee._id} style={cardStyle} className="employee-card">
            <h3 style={textStyle}>{employee.name}</h3>
            <p style={textStyle}>Email: {employee.email}</p>
            <p style={textStyle}>Joining Date: {new Date(employee.joiningDate).toDateString()}</p>
            <p style={textStyle}>Designation: {employee.designation}</p>
            <p style={textStyle}>Contact: {employee.contact}</p>
            <a
              href={employee.workProfile}
              target="_blank"
              rel="noopener noreferrer"
              style={textStyle}
            >
              Work Profile
            </a>
          </div>
        ))
      )}
    </div>
  );
};
