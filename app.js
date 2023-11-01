//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}/


let APIKEY ="37358f0fedbec504231907229bd1956b";


getweatherdata = (city) =>{
    const url =`https://api.openweathermap.org/data/2.5/weather`;
    
    const fullurl = `${url}?q=${city}&appid=${APIKEY}&units=metric`;
    const weatherpromise = fetch(fullurl);
    console.log(city);

    return weatherpromise.then((response) =>{
        return response.json()

    })


}

function searchcity(){
    const city = document.getElementById('city-input').value;

    getweatherdata(city)
    .then((response) =>{
        console.log(response);
        showweatherdata(response)
    })
    .catch((err) =>{
        console.log(err);
    })

}

showweatherdata = (weatherdata) =>{
    document.getElementById('city-name').innerText = weatherdata.name;
    document.getElementById('weather-type').innerText = weatherdata.weather[0].main;
    document.getElementById('temp').innerText = weatherdata.main.temp;
    document.getElementById('min-temp').innerText = weatherdata.main.temp_min;
    document.getElementById('max-temp').innerText = weatherdata.main.temp_max;
}