import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Header from './Header';

function Home() {
  const [quote, setQuote] = useState({});
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Fetch random quote
    axios.get('/api/quote/random')
      .then(response => setQuote(response.data))
      .catch(error => console.error('Error fetching random quote:', error));
  }, []);

  return (
    <>
      <Header/>
      <div className="flex flex-col items-center justify-center h-screen bg-blue-900 text-white">
        <div
          className={`text-center border border-white p-4 rounded-lg transform ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ transition: 'transform 0.3s ease-in-out' }}
        >
          <div className="bg-blue-600 p-6 rounded-lg hover:shadow-lg transition duration-300 ease-in-out">
            <h1 className="text-3xl font-bold mb-4">Quote of the Day</h1>
            <div>
              <p className="text-xl">{quote.q}</p>
              <p className="mt-2 text-lg">- {quote.a}</p>
            </div>
          </div>
        </div>
        <Link to="/search">
          <button className="mt-32 px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded">
            Want to search a specific author
          </button>
        </Link>
      </div>
    </>
  );
}

export default Home;
