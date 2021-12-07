import './App.css';
import FlagCard from './components/FlagCard';
import { getCountries } from './services/flags';
import { useState, useEffect } from 'react';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();
      console.log(data);
      setCountries(data);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      {countries.map((country) => (
        <FlagCard key={country.iso2} {...country} />
      ))}
    </div>
  );
}

export default App;
