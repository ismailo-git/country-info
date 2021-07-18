document.querySelector('#inputSearch').addEventListener('input', getCountries);
const value = document.querySelector('#inputSearch').value;
function getCountries(e) {
    e.preventDefault();

    fetch(`https://restcountries.eu/rest/v2/name/${this.value}`)
    .then((res) => res.json())
    .then((data) => {
        let output = '';
        data.forEach(function(country){

            output += `<div class="box">
                        <img src="${country.flag}" />
                        <div class="content">
                            <p><span>Pays:</span> ${country.name}</p>
                            <p><span>Capitale :</span> ${country.capital}</p>
                            <p><span>Population :</span> ${country.population}</p>
                            <p><span>Continent :</span> ${country.region}</p>
                        </div>
                        </div>`;

        });
        document.querySelector('#box-container').innerHTML = output;
    })
}