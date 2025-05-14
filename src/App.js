import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleFileSelect = (file) => {
    setFile(file);
    console.log('Selected file:', file.name);
  };

  const handleSearch = async (query) => {
    console.log('Search query:', query);
    try {
      const endpoint = `https://rag-api-app.azurewebsites.net`;
      const response = await fetch(endpoint);
      // If your API returns JSON, use .json() instead:
      // const data = await response.json();
      const text = await response.text();
      console.log('API response:', text);
      setResult(text);
    } catch (error) {
      console.error('Error calling API:', error);
      setResult('Error fetching data');
    }
  };

  return (
    <div className="App">
      <h1 className="title">What are you working on?</h1>
      <SearchBar onFileSelect={handleFileSelect} onSearch={handleSearch} />
      {file && <p className="info">Selected: {file.name}</p>}

      <div className="chat-container">
        {result && <div className="bubble">{result}</div>}
      </div>
    </div>
  );
}

export default App;