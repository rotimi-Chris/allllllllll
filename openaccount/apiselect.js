/*
var config = {
    cUrl: 'https://api.countrystatecity.in/v1/countries',
    ckey: 'NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZ1g4RTk1M1J1aA==' ,

};

var countrySelect = document.querySelector('.country');
    countrySelect = document.querySelector('.state');
    countrySelect = document.querySelector('.city');


function loadCountries(){
    let apiEndPoint = config.cUrl

    fetch(apiEndPoint, {headers: {"X-CSCAPI-KEY": config.ckey}})
    .then(Response => Response.json())
    .then(data =>{
            console.log(data);
    })
}

window.onload = loadCountries */

var config = {
    cUrl: 'https://api.countrystatecity.in/v1/countries',
    ckey: 'NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZ1g4RTk1M1J1aA=='
};

// Get the select elements
var countrySelect = document.querySelector('.country');
var stateSelect = document.querySelector('.state');
var citySelect = document.querySelector('.city');

function loadCountries() {
    let apiEndPoint = config.cUrl;

    fetch(apiEndPoint, {
        headers: {
            "X-CSCAPI-KEY": config.ckey
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);

        // Populate the country select dropdown
        data.forEach(country => {
            let option = document.createElement('option');
            option.value = country.iso2;
            option.text = country.name;
            countrySelect.appendChild(option);
        });
    })
    .catch(error => console.error('Error loading countries:', error));
}

// Load countries on window load
window.onload = loadCountries;
