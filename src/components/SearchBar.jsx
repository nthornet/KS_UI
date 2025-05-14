import React, { useRef } from 'react';
import { FiPlus, FiMic, FiSend } from 'react-icons/fi';
import './SearchBar.css';

export default function SearchBar({ onFileSelect, onSearch }) {
  const fileInputRef = useRef(null);

  const handlePlusClick = () => fileInputRef.current.click();
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && onFileSelect) onFileSelect(file);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && onSearch) onSearch(e.target.value);
  };

  const handleSend = () => {
    const val = document.getElementById('search-input').value;
    if (onSearch) onSearch(val);
  };

  return (
    <div className="search-bar">
      <FiPlus className="icon" onClick={handlePlusClick} />
      <input
        id="search-input"
        type="text"
        className="search-input"
        placeholder="Ask anything"
        onKeyDown={handleKeyDown}
      />

      <input
        type="file"
        ref={fileInputRef}
        className="hidden-input"
        onChange={handleFileChange}
      />
    </div>
  );
}