const button = document.getElementById('search-button');
const input = document.getElementById('city-input');
const cityName = document.getElementById('city-name');
const cityTemp = document.getElementById('city-temp');
const cityTime = document.getElementById('city-time');

async function getData(cityName){
    const prmise = await fetch(`http://api.weatherapi.com/v1/current.json?key=8f7f06c6367c4b6393835919250701&q=${cityName}&aqi=yes`);
    return await prmise.json();
}

button.addEventListener('click',async () => {
    const value = input.value;
    const result = await getData(value);
    cityName.innerText = `${result.location.name}, ${result.location.country}, ${result.location.region}`;
    cityTime.innerText = result.location.localtime;
    cityTemp.innerText = `${result.current.temp_c}°C`;
});
 
// http://api.weatherapi.com/v1/current.json?key=8f7f06c6367c4b6393835919250701&q=London&aqi=yes