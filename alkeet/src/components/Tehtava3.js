import React, {useState} from 'react';

const Tehtava3 = ({countries}) => {
    const [showCountry, setShowcountry] = useState(false);

    return (
        countries.map(country =>
            <div key={country.id} className="country">
                <h3 onClick={e => setShowcountry(!showCountry)}>>{country.country}</h3>
                { showCountry && 
                <div className={"countryInfo"}>
                <p>Capital: {country.capital}</p>
                <p>Population: {country.population}</p>
                <img src={country.flagurl} alt="flag"></img>
                </div>
                }
            </div>
            )
    )
}

export default Tehtava3;