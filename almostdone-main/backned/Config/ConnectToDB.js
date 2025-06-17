import mongoose from 'mongoose';

export const connectToDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://mohan:leela%40123@cluster0.mb4tm.mongodb.net/collegeproject', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            family: 4
        });

        console.log('MongoDB Connected');
        console.log('Database:', conn.connection.name);
        
        // List all collections
        const collections = await conn.connection.db.listCollections().toArray();
        console.log('Collections:', collections.map(c => c.name));

    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};
