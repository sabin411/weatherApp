const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const loading = document.querySelector('.loading');
const forecast = new Forecast();


const updateUi = (data) => {

    // destructure property
    console.log(data);
    if (data) {
        loading.classList.add('d-none');
    }
    const {
        cityDets,
        weather
    } = data;

    // update detail template
    details.innerHTML = `
     <h5 class="my-3">${cityDets.EnglishName}</h5>
     <div class="my-3">${weather.WeatherText}</div>
     <div class="display-4 my-4">
         <span>${weather.Temperature.Metric.Value}</span>
         <span>&deg;C</span>
     </div>
     `
    //  update the night/day & icon image
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);



    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';

    time.setAttribute('src', timeSrc);

    //  remove the d-none class if present
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
}


cityForm.addEventListener('submit', e => {
    // prevent default action
    e.preventDefault();
    loading.classList.remove('d-none');
    card.classList.add('d-none');
    if (loading.textContent === "Ran into some problem!! :(") {
        loading.textContent = "Loading...";
    }

    // get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();
    // update the ui with a new city
    forecast.updateCity(city)
        .then(data => updateUi(data))
        .catch(err => {
            if (err) {
                loading.textContent = "Ran into some problem!! :(";
            }
        });
    // set local storage
    localStorage.setItem('location', city);
});

if (localStorage.getItem('location')) {
    console.log(localStorage.getItem('location'))
    forecast.updateCity(localStorage.getItem('location'))
        .then(data => updateUi(data))
        .catch(err => loading.textContent = "Ran into some problem!! :(");
}