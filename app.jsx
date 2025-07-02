import { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('Search');

  const navItems = ['Search', 'Documentation', 'Adviser', 'Section', 'Video Call'];

  return (
    <div className="app">
      <header className="hero">
        <h2>India's first legal adviser provides support in AI.</h2>

        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Type in your legal advice"
          />
          <button className="search-button">↑</button>
        </div>

        <div className="nav-buttons">
          {navItems.map((item) => (
            <button
              key={item}
              className={`nav-btn ${activeTab === item ? 'active' : ''}`}
              onClick={() => setActiveTab(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </header>

      <section className="carousel-container">
        <div className="carousel-track">
          {[
            { value: '10,000+', label: 'Legal Adviser' },
            { value: '100+', label: 'Senior Adviser' },
            { value: '400+', label: 'Active User' },
            { value: '9000+', label: 'Legal Case Closed' },
            { value: '10+', label: 'Legal Offices' },
          ].map((stat, index) => (
            <div className="carousel-item" key={index}>
              <div className="stat-box">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
          {[
            { value: '10,000+', label: 'Legal Adviser' },
            { value: '100+', label: 'Senior Adviser' },
            { value: '400+', label: 'Active User' },
            { value: '9000+', label: 'Legal Case Closed' },
            { value: '10+', label: 'Legal Offices' },
          ].map((stat, index) => (
            <div className="carousel-item" key={`repeat-${index}`}>
              <div className="stat-box">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
