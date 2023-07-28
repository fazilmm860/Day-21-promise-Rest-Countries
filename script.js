function fetchData(apiUrl) {
    return fetch(apiUrl).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        return response.json();
    });
}

function fetchCountryData() {
    const apiUrl = 'https://restcountries.com/v3/all';
    return fetchData(apiUrl);
}

function displayCountryInfo(countries) {
    const countryInfoDiv = document.getElementById('countryInfo');
    countries.forEach(country => {
        const countryInfo = document.createElement('div');
        countryInfo.innerHTML = `
            <h2>${country.name.common}</h2>
            <p>Capital: ${country.capital}</p>
            <p>Population: ${country.population}</p>
            <hr>
        `;
        countryInfoDiv.appendChild(countryInfo);
    });
}

fetchCountryData()
    .then(countries => {
        displayCountryInfo(countries);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });