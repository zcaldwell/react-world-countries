import './App.css';
import FlagCard from './components/FlagCard';
import { getCountries } from './services/flags';
import { useState, useEffect } from 'react';

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');
  const [continent, setContinent] = useState('All');
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();
      setCountries(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  function filterCountries() {
    return countries
      .sort((a, b) => {
        if (order === 'asc') {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        } else if (order === 'dsc') {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }
          return 0;
        }
      })
      .filter((country) => {
        return (
          country.name.includes(query) && (country.continent === continent || continent === 'All')
        );
      });
  }

  if (loading) return <h1>Loading</h1>;

  return (
    <div className="App">
      <div className="input-container">
        <h1>Country List</h1>
        <input
          placeholder="Search Countries"
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <select value={continent} onChange={(e) => setContinent(e.target.value)}>
          <option value="All">All</option>
          <option value="Asia">Asia</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="Africa">Africa</option>
          <option value="Oceania">Oceania</option>
          <option value="Europe">Europe</option>
          <option value="Antartica">Antartica</option>
        </select>
        <select value={order} onChange={(e) => setOrder(e.target.value)}>
          <option value="n/a">N/A</option>
          <option value="asc">Ascending</option>
          <option value="dsc">Descending</option>
        </select>
      </div>
      <div className="card-container">
        {filterCountries().map((country) => (
          <FlagCard key={country.iso2} {...country} />
        ))}
      </div>
    </div>
  );
}

export default App;
