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
        `;
        allCountries.appendChild(div)
    });
}