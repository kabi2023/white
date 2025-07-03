import { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('Search');
  const [searchQuery, setSearchQuery] = useState('');
  const [result, setResult] = useState('');
  const [submittedQuery, setSubmittedQuery] = useState('');
  const [searchSubmitted, setSearchSubmitted] = useState(false);

  const navItems = ['Search', 'Documentation', 'Adviser', 'Section', 'Video Call'];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setSubmittedQuery(searchQuery);
      setResult(`This is a dummy legal advice result for: "${searchQuery}"`);
      setSearchSubmitted(true);
      setSearchQuery('');
    }
  };

  return (
    <div className={`app ${searchSubmitted ? 'search-submitted' : ''}`}>
      <h2 className={`hero-title ${searchSubmitted ? 'hide' : ''}`}>
  India's first legal adviser provides support in AI.
</h2>

        {/* User query at top */}
        {searchSubmitted && submittedQuery && (
          <div className="top-query-box">
          <span className="query-text">{submittedQuery}</span>
          <span className="query-bar"></span>
        </div>
        )}

        {/* Dummy result */}
        {result && (
          <div className="search-result">{result}</div>
        )}

        {/* Search box */}
        <div className={`search-container ${searchSubmitted ? 'move-bottom' : ''}`}>
          <input
            type="text"
            className="search-input"
            placeholder="Type in your legal advice"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>↑</button>
        </div>

        {/* Hide nav and carousel after search */}
        {!searchSubmitted && (
          <>
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
              </div>
            </section>
          </>
        )}

    </div>
  );
}

export default App;
