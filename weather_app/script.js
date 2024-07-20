let location_name = document.querySelector("input");
let location_display = document.querySelector(".location");
let currDateTime = document.querySelector(".time-date");
let currWeather = document.querySelector(".current-weather");
let currWeatherImg = document.querySelector(".current-weather-img");
let currTemp = document.querySelector(".current-temp");
let currMinTemp = document.querySelector(".min-temp");
let currMaxTemp = document.querySelector(".max-temp");
let attributes = document.querySelectorAll(".attribute-value");
let searchCity = document.querySelector("button")
searchCity.addEventListener('click',function(){
});
console.log(currDateTime.innerHTML);

// My API key
const apiKey = "facfb070af760b2507aafa8f75c47464";
const getCountryName = (code)=>{
    return new Intl.DisplayNames([code],{type:"region"}).of(code);
} 
const getDateNow = (dt)=>{
    const currDate=new Date(dt*1000)
    const options={
        weekday:"long",
        year:"numeric",
        month:"long",
        day:"numeric",
        hour:"numeric",
        minutes:"numeric"
    }
    const formatter = new Intl.DateTimeFormat("en-US",options);
    return formatter.format(currDate);
} 
const getWeather = async (lat,lon) => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  try {
    const res = await fetch(apiUrl, {
      headers: {
        Accept: "application/json",
      },
    });
    // feels_like: 300.65;
    // grnd_level: 913;
    // humidity: 51;
    // pressure: 1009;
    // sea_level: 1009;
    // temp: 300.17;
    // temp_max: 301.73;
    // temp_min: 298.79;
    console.log(res);
    const data = await res.json();
    const {main,name,weather,wind,sys,dt} = data;
    console.log(data);
    location_display.innerHTML = `${name}, ${getCountryName(sys.country)}`;
    currTemp.innerHTML =`${main.temp}&degC`;
    currMinTemp.innerHTML = `Min: ${main.temp_min} °C`;
    currMaxTemp.innerHTML = `Max: ${main.temp_max} °C`;
    attributes[0].innerHTML = data.main.feels_like;
    attributes[1].innerHTML = `${data.main.humidity}%`
    attributes[2].innerHTML = `${data.wind.speed} m/s`
    attributes[3].innerHTML = `${data.main.pressure} hPa`
    currWeather.innerHTML = weather[0].description
    currWeatherImg.src = `http://openweathermap.org/img/wn/${weather[0].icon}@4x.png`;
    // const now = new Date(dt*1000);
    currDateTime.innerHTML = `${getDateNow(dt)}`;
  } catch (err) {
    currTemp.innerHTML = `Failed to Fetch Data`;
    console.log(err);
  }
};
const getLocation=()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
        (position)=>{
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            getWeather(lat,lon);
        },
        (error)=>{
            console.log(error);
            currTemp.innerHTML='Failed to Get Location'
        }
        );
    }
    else{
        const lat = 19.0728300;
        const lon = 72.8826100;
        getWeather(lat,lon)
        currTemp.innerHTML=`GeoLocation not supported`
    }
}
window.addEventListener("load", getLocation);
