const mongoose = require('mongoose');

const dbConnect = async (path) => {
    try {
        await mongoose.connect(path); 
        console.log('Connected to MongooDB!');
    } catch (error) {
        console.log('error: ', error);
        process.exit(1);
    }
};

module.exports = dbConnect;