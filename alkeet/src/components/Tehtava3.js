import React, {useState} from 'react';



const Tehtava3 = ({countries}) => {
    const [showCountry, setShowCountry] = useState('');
  
    const toggleCountry = (id) => {
        setShowCountry(prev => prev.CountryShown !== id? id: '');
      };
  
    return (
      <>
        {countries.map(country =>
          <div className="country" key={country.id}>
            <h3 onClick={() => toggleCountry(country.id)}>{country.country}</h3>
            { showCountry === country.id ? <div className="countryElement"><p>Capital: {country.capital}</p>
                <p>Population: {country.population}</p>
                <img src={country.flagurl} alt="flag"></img></div> : null }
          </div>
        )}
      </>
    );
  };
export default Tehtava3;