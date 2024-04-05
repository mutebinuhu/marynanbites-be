const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://mutebinuhu:VdDWLwDKRmhmK6MH@cluster0.sawqd.mongodb.net/marynan_bites?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

db.once('open', () => {
    console.log('Connected to MongoDB currently');
});

module.exports = mongoose;
