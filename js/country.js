const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
};
loadCountries();

const displayCountries = countries => {
    const allCountries = document.getElementById('all-countries');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
        <img src="${country.flag}"/>
            <h3>${country.name}</h3>
            <p>Capital: ${country.capital}</p>
            <button onclick="loadCountryByName('${country.name}')">Details</button>
        `;
        allCountries.appendChild(div)
    });
};

const loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => showDetails(data[0]))
    document.getElementById('title').style.display = 'block';
};

const showDetails = country => {
    const countryDetails = document.getElementById('country-details');
    const div = document.createElement('div');
    div.classList.add('datils')
    div.innerHTML = `
        <img width =200px; src = "${country.flag}"/>
        <h3>Name: ${country.name}</h3>
        <h4>Native Name: ${country.nativeName}</h4>
        <h4>Capital: ${country.capital}</h4>
        <p>Population: ${country.population}</p>
        <P>Region: ${country.region}</p>
        <P>Sub Region: ${country.subregion}</p>

    `;
    countryDetails.appendChild(div)
}