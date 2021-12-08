import './App.css';
import FlagCard from './components/FlagCard';
import { getCountries } from './services/flags';
import { useState, useEffect } from 'react';

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');
  const [continent, setContinent] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();
      console.log(data);
      setCountries(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  function filterCountries() {
    return countries.filter((country) => {
      return (
        country.name.includes(query) && (country.continent === continent || continent === 'All')
      );
    });
  }
  if (loading) return <h1>Loading</h1>;

  return (
    <div className="App">
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
      {filterCountries().map((country) => (
        <FlagCard key={country.iso2} {...country} />
      ))}
    </div>
  );
}

export default App;
