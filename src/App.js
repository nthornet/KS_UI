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
      const response = await fetch('https://rag-api-app.azurewebsites.net/docs', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        //body: JSON.stringify({ query }),
      });
      const data = await response.json();
      console.log('API response:', data);
      setResult(data);
    } catch (error) {
      console.error('Error calling API:', error);
    }
  };

  return (
    <div className="App">
      <h1 className="title">What are you working on?</h1>
      <SearchBar onFileSelect={handleFileSelect} onSearch={handleSearch} />
      {file && <p>Selected: {file.name}</p>}
      {result && <pre className="result">{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}

export default App;