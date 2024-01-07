const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const quoteSchema = require('./models/quoteModel')
const { getRandomQuote, searchQuotesByAuthor } = require('./controllers/quoteController');

const app = express();
const PORT =  5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://faizan:faizan123@cluster0.skerruw.mongodb.net/test?retryWrites=true&w=majority');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
app.get('/test', (req, res) => {
  res.send("test")
})
app.get('/api/quote/random', getRandomQuote);
app.get('/api/quote/search', searchQuotesByAuthor);


// Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});