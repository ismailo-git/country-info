document.querySelector('#inputSearch').addEventListener('input', getCountries);
const value = document.querySelector('#inputSearch').value;
function getCountries(e) {
    e.preventDefault();

    fetch(`https://restcountries.eu/rest/v2/name/${this.value}`)
    .then((res) => res.json())
    .then((data) => {
        let output = '';
        data.forEach(function(user){

            output += `<div class="column is-half">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image">
                                    <img src="${user.flag}"/>
                                </figure>
                            </div>
                            <div class="card-content">
                                <h3>Pays : ${user.name}</h3>
                                <h3>Population : ${user.population}</h3>
                                <h3>Capitale : ${user.capital}</h3>
                                <h3>Continent : ${user.region}</h3>
                                <h3>Langue : ${user.languages}</h3>
                            </div>
                        </div>
            </div>`;

        });
        document.querySelector('#content').innerHTML = output;
    })
}