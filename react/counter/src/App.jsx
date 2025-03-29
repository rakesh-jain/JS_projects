import { useState } from 'react';
import './App.css';
import Time from './timer.jsx';

import StopWatch  from './stopwatch.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <header>
        <h1>Rakesh + React Counter</h1>
      </header>
      <main>
        <div className="counter-display">
          <h2>{count}</h2>
        </div>
        <div className="button-group">
          <button className="btn increase" onClick={() => setCount(count + 1)}>
            Increase
          </button>
          <button
            className="btn decrease"
            onClick={() => setCount(count > 0 ? count - 1 : null)}
          >
            Decrease
          </button>
          <button className="btn reset" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
        <Time />
        <StopWatch />
      </main>
      <footer>
        <p>Made with ❤️ by Rakesh</p>
      </footer>
    </div>
  );
}

export default App;
