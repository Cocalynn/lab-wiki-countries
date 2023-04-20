import { useParams } from 'react-router-dom';
import countriesData from '../countries.json';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function CountriesDetails() {

    const { countryCode } = useParams();
    const [foundCountry, setFoundCountry] = useState(null);
    console.log("countryCode -----> ",countryCode);

    useEffect(() => {
        const country = countriesData.find((country) => country.alpha3Code === countryCode);
        if(country){
            setFoundCountry(country);
        }
    }, [countryCode]);


    return (
        <div>
            {foundCountry && (
                <div>
                    <h1>{foundCountry.name.common}</h1>
                    <p>Capital: {foundCountry.capital}</p>
                    <p>Area: {foundCountry.area} km2</p>
                    {
                        foundCountry.borders.length > 0 && (
                            <div>
                                <h3>Borders:</h3>
                                <ul>
                                    {foundCountry.borders.map((border, index) => {
                                        const borderCountry = countriesData.find((country) => country.alpha3Code === border);
                                        return <li><Link to={`/${borderCountry.alpha3Code}`} key={index}>{borderCountry.name.common}</Link></li>
                                    }
                                    )}
                                </ul>
                            </div>
                        )
                    }
                </div>
            )}
        </div>
    )
}

export default CountriesDetails