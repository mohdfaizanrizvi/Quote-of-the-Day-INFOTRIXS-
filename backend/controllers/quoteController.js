const axios = require('axios');
const Quote = require('../models/quoteModel');


// Controller to get a random quote from MongoDB
const getRandomQuote = async (req, res) => {
  try {
    // Retrieve a random quote from MongoDB
    const randomQuote = await Quote.aggregate([{ $sample: { size: 1 } }]);
    res.json(randomQuote[0]);
  } catch (error) {
    console.error('Error getting random quote from MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to search quotes by author
const searchQuotesByAuthor = async (req, res) => {
  const { search } = req.query;

  try {
    // Use MongoDB's $regex to perform a case-insensitive search on the author field
    const filteredQuotes = await Quote.find({
      a: { $regex: new RegExp(search, 'i') },
    });

    const responseQuotes = filteredQuotes || []
    if (filteredQuotes.length === 0) {
      // If no quotes are found, send a custom response
      res.send( 'Sorry, no quotes found for the specified author.' );
    } else {
      // If quotes are found, send the filtered quotes
      res.json(filteredQuotes);
    }
  } catch (error) {
    console.error('Error searching quotes by author:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Export the controllers
module.exports = {
  getRandomQuote,
  searchQuotesByAuthor,
};
