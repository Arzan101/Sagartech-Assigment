import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Employee from './models/Employee.js';


dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.post('/api/employees', async (req, res) => {
    const { name, email, joiningDate, designation, contact, workProfile } = req.body;
    try {
        const newEmployee = new Employee({
            name,
            email,
            joiningDate,
            designation,
            contact,
            workProfile,
        });
        await newEmployee.save();
        res.status(201).json(newEmployee);
    } catch (error) {
        console.error('Error adding employee:', error); 
        res.status(500).json({ error: 'Failed to add employee' });
    }
});


app.get('/api/employees', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        console.error('Error retrieving employees:', error); 
        res.status(500).json({ error: 'Failed to retrieve employees' });
    }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
