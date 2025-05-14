import React, { useState } from 'react';

function Counter({ initialCount = 0, step = 1 }) {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount(c => c + step);
  const decrement = () => setCount(c => c - step);

  return (
    <div style={{ textAlign: 'center', margin: '1rem' }}>
      <h2>Count: {count}</h2>
      <button onClick={decrement}>–</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

// **Default export** — so it must be imported without braces
export default Counter;