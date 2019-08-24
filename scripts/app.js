const form = document.querySelector('.change-location');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon');


const updateCity = async(cityName) => {
   const citydet = await getCity(cityName); 
   const weatherInfo = await getWeather(citydet.Key)

   return {citydet,weatherInfo};
}
// updating UI

const updateUi = data => {
    const name = data.citydet.EnglishName;
    const weatherCo = data.weatherInfo.WeatherText;
    const temp = data.weatherInfo.Temperature.Metric.Value;
    console.log(data);

    details.innerHTML = ` 
    <h5 class="my-3">${name}</h5>
    <div class="my-3">${weatherCo}</div>
    <div class="display-4 my-4">
        <span>${temp}</span>
        <span>&deg;C</span>
    </div>`;

    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
    
    if(data.weatherInfo.IsDayTime){
        time.setAttribute('src','weather images/day.jpg');
    }else{
        time.setAttribute('src','weather images/night.jpg');
    }

    icon.innerHTML = `<img src="weather images/${data.weatherInfo.WeatherIcon}.png">`

}

form.addEventListener('submit',e => {
    e.preventDefault();
    const cityName = form.city.value.trim();
    form.reset();

    updateCity(cityName)
     .then(data => updateUi(data))
     .catch(err => console.log(err));

});
