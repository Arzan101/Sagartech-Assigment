import React, { useState } from 'react';
import axios from 'axios';
import './InputForm.css'; 

export const InputForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    joiningDate: '',
    designation: '',
    contact: '',
    workProfile: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/employees', formData);
      alert('Employee added successfully');
      setFormData({
        name: '',
        email: '',
        joiningDate: '',
        designation: '',
        contact: '',
        workProfile: '',
      });
    } catch (error) {
      console.error('Failed to add employee', error);
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Add Employee</h1>
      <form className="employee-form" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          name="name"
          value={formData.name}
          placeholder="Employee Name"
          onChange={handleChange}
          required
        />
        <input
          className="form-input"
          type="email"
          name="email"
          value={formData.email}
          placeholder="Employee Email"
          onChange={handleChange}
          required
        />
        <input
          className="form-input"
          type="date"
          name="joiningDate"
          value={formData.joiningDate}
          onChange={handleChange}
          required
        />
        <input
          className="form-input"
          type="text"
          name="designation"
          value={formData.designation}
          placeholder="Employee Designation"
          onChange={handleChange}
          required
        />
        <input
          className="form-input"
          type="text"
          name="contact"
          value={formData.contact}
          placeholder="Employee Contact"
          onChange={handleChange}
          required
        />
        <input
          className="form-input"
          type="text"
          name="workProfile"
          value={formData.workProfile}
          placeholder="Work Profile URL"
          onChange={handleChange}
          required
        />
        <button className="form-button" type="submit">Add Member</button>
      </form>
    </div>
  );
};
