import mongoose from 'mongoose';

const materialSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true,
        enum: ['CSE', 'ECE', 'EEE', 'CIVIL', 'MECH']
    },
    semester: {
        type: String,
        required: true,
        enum: ['1-1', '1-2', '2-1', '2-2', '3-1', '3-2', '4-1', '4-2']
    },
    fileUrl: {
        type: String,
        required: true
    },
    uploadedBy: {
        type: String,
        required: true
    },
    uploadDate: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Material', materialSchema);