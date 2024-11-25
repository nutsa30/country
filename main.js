
const inputField = document.getElementById('inputField');
const continentSelect = document.getElementById('continent-select');
const countriesContainer = document.createElement('div');
countriesContainer.className = 'countries-container';
document.body.appendChild(countriesContainer);




async function fetchCountries() {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    if (!response.ok) throw new Error('Failed to fetch countries data');
    const countries = await response.json();
    displayCountries(countries);
    enableSearchAndFilter(countries);
  } catch (error) {
    console.error('Error fetching countries:', error);
    countriesContainer.innerHTML = '<p>Failed to load countries data.</p>';
  }
}

function displayCountries(countries) {
  countriesContainer.innerHTML = ''; 
  countries.forEach((country) => {
    const countryCard = document.createElement('div');
    countryCard.className = 'country-card';
    countryCard.innerHTML = `
      <img src="${country.flags.svg}" alt="Flag of ${country.name.common}">
      <div class="details">
        <h2>${country.name.common}</h2>
        <p>Population: ${country.population.toLocaleString()}</p>
        <p>Region: ${country.region}</p>
        <p>Capital: ${country.capital ? country.capital[0] : 'N/A'}</p>
      </div>
    `;

   
     countryCard.addEventListener('click', () => {
      
        localStorage.setItem('selectedCountry', JSON.stringify(country));
  
      
        window.location.href = 'details.html';

    });

    countriesContainer.appendChild(countryCard);
  });
}


function enableSearchAndFilter(countries) {
  inputField.addEventListener('input', () => {
    const searchTerm = inputField.value.toLowerCase();
    const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm)
    );
    displayCountries(filteredCountries);
  });

  continentSelect.addEventListener('change', () => {
    const selectedRegion = continentSelect.value;
    const filteredCountries = countries.filter(
      (country) => country.region.toLowerCase() === selectedRegion.toLowerCase()
    );
    displayCountries(filteredCountries);
  });
}


fetchCountries();


const themeModeSpan=document.getElementById("theme-mode-span")

themeModeSpan.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});


