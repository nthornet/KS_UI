import logo from './logo.svg';
import './App.css';
import React from 'react';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Counter Demo</h1>
      </header>

      {/* First counter: starts at 5, steps by 2 */}
      <Counter initialCount={5} step={2} />

      {/* Second counter: default props (0 and 1) */}
      <Counter />
    </div>
  );
}

export default App;
