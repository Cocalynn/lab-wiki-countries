import { Link } from "react-router-dom";     // <== IMPORT


function CountriesList({countries}) {
  return (
    <div>
        {countries.map((country, index) => {
            return (
                <Link to={`/${country.alpha3Code}`} key={index} className="d-flex">
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.common} style={{width: "50px"}} />
                    <p>{country.name.common}</p>
                </Link>
            )
        })}
    </div>
  )
}

export default CountriesList