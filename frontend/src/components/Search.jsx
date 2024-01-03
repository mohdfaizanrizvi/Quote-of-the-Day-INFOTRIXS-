import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Header from './Header'

function Search() {
    const [author, setAuthor] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [isHovered, setIsHovered] = useState(false)
    const [hasSearched, setHasSearched] = useState(false)

    const handleSearch = () => {
      if (author.trim() === '') {
        return;
      }
        axios.get(`/api/quote/search?search=${author}`)
        .then(response => {
          setSearchResults(response.data);
          setHasSearched(true);
      })
        .catch(error => console.error('Error searching quotes:', error))
    }

    return (
      <>
        <Header />
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
              <h1 className="text-3xl font-bold mb-4">Search Quotes by Author</h1>
              <input
                type="text"
                placeholder="Enter author name"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className=" p-2 rounded text-black mb-2 mr-2"
              />
              <button
                onClick={handleSearch}
                className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded"
              >
                Search
              </button>
              <ul className="mt-4">
              {hasSearched &&
    (searchResults && Array.isArray(searchResults) && searchResults.length > 0 ? (
      searchResults.map((quote) => (
        <li key={quote._id}>
          <p className="text-xl">{quote.q}</p>
          <p className="mt-2 text-lg">- {quote.a}</p>
        </li>
      ))
    ) : (
      <p>No quotes found for the specified author.</p>
    ))}

              </ul>
            </div>
          </div>
          <Link to="/">
            <button className="mt-32 px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded">
              Return to Quote of the Day
            </button>
          </Link>
        </div>
      </>
    );
}

export default Search