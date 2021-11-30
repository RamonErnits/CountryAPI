const getCountriesBtn = document.querySelector('.getCountries');
const countryList = document.querySelector('.countries');
const inputField = document.querySelector('input[type="number"]');
const mySelect = document.getElementById("mySelect");

getCountriesBtn.addEventListener('click', getCountry)


function getCountry() {
    let countryOfChoice = mySelect.value;
    let url = `https://restcountries.com/v2/name/${countryOfChoice}`;

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            let Name = data[0].name;
            let TopLevelDomain = data[0].topLevelDomain;
            let CallingCode = data[0].callingCodes;
            let Capital = data[0].capital;
            let Region = data[0].region;
            let SubRegion = data[0].subregion;
            let Population = data[0].population;
            let Timezone = data[0].timezones;
            let Language = data[0].languages[0].name;
            let CurrencyCode = data[0].currencies[0].code
            let CurrencyName = data[0].currencies[0].name
            let CurrencySymbol = data[0].currencies[0].symbol
            let Flag = data[0].flags.png
            countryList.innerHTML = `<li>${Name}</li>
        <li>${TopLevelDomain}</li>
        <li>${CallingCode}</li>
        <li>${Capital}</li>
        <li>${Region}</li>
        <li>${SubRegion}</li>
        <li>${Population}</li>
        <li>${Timezone}</li>
        <li>${Language}</li>
        <li>${Region}</li>
        <li>${CurrencyCode}</li>
        <li>${CurrencyName}</li>
        <li>${CurrencySymbol}</li>
        <li><img src="${Flag}" /></li>`
        });
};