import { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto'; // reset height
      inputRef.current.style.height = `${Math.min(inputRef.current.scrollHeight, 120)}px`; // max height for 4 rows
    }
  }, [input]);

  return (
    <div className="container">
      <div className="chat-box">
        <h1 className="title">What can I help with?</h1>
        <div className="input-container">
          <textarea
            ref={inputRef}
            className="chat-input"
            rows={1}
            placeholder="Type your message here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="send-btn" disabled={!input.trim()}>
            ⬆
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
