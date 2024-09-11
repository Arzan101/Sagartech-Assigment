import mongoose from 'mongoose';

const EmployeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    joiningDate: { type: Date, required: true },
    designation: { type: String, required: true },
    contact: { type: String, required: true },
    workProfile: { type: String, required: true },
});

const Employee = mongoose.model('Employee', EmployeeSchema);

export default Employee;
