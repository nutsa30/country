const countryDetailsContainer = document.getElementById('country-details');
const backButton = document.getElementById('back-button');


const selectedCountry = JSON.parse(localStorage.getItem('selectedCountry'));





if (selectedCountry) {
    countryDetailsContainer.innerHTML = `
    <div class="country-details">
        <img src="${selectedCountry.flags.svg}" alt="Flag of ${selectedCountry.name.common}">
        <div class="country-details-info">
            <h2 >${selectedCountry.name.common}</h2>
        <div class="details-info">
            <div>
            <p><strong>Native name:</strong> ${selectedCountry.name.nativeName? Object.values(selectedCountry.name.nativeName)[0].common 
            : 'N/A'}</p>
            <p><strong>Population:</strong> ${selectedCountry.population}</p>
            <p><strong>Region:</strong> ${selectedCountry.region}</p>
            <p><strong>Subregion:</strong> ${selectedCountry.subregion}</p>
            <p><strong>Capital:</strong> ${selectedCountry.capital ? selectedCountry.capital[0] : 'N/A'}</p>
            </div>
            
            <div>
            <p><strong>Top Level Domain:</strong> ${selectedCountry.tld}</p>
            <p><strong>Currencies:</strong> ${Object.values(selectedCountry.currencies || {}).map(c => c.name).join(', ')}</p>
            <p><strong>Languages:</strong> ${Object.values(selectedCountry.languages || {}).join(', ')}</p>
            <div/>

            </div>
            </div>
            </div>
            <div class="country-borders">

           <p><strong>Border Countries:</strong> ${selectedCountry.borders}</p>
            </div>
            `;

  
} else {
  countryDetailsContainer.innerHTML = '<p>Error loading country details. Please go back and try again.</p>';
}


backButton.addEventListener('click', () => {
  window.location.href = 'index.html';



});




const themeModeSpan=document.getElementById("theme-mode-span")

themeModeSpan.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
  