const city = document.querySelector(".location .city")
const date = document.querySelector(".location .date")

const temp = document.querySelector(".weather__app .temp")
const body = document.querySelector("body")

const weather_main = document.querySelector(".weather__app .weather")
const hightLowWeather = document.querySelector(".weather__app .min__max-temp")

const icon = document.querySelector(".weather__app .icon")
const time = document.querySelector(".time__zone .time")

const presure = document.querySelector(".weather__app .presure")
const humidity = document.querySelector(".weather__app .humidity")
const time__zone = document.querySelector(".time__zone .sunrise")

const searchbox = document.querySelector('.search');

const api = {
 
    key: "d8d53059d6781061dd2f7a6c22bec292",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  

  searchbox.addEventListener('keypress', setQuery);
 
  function setQuery(evt) {
    if (evt.keyCode == 13) {
      getResults(searchbox.value);
      searchbox.value = ''
    }
  }
  
  function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(weather => {
        return weather.json();
      }).then(displayResults)
       .catch(errorDisplay)
  }
  function errorDisplay(){
      city.innerText = "Can't Find City"
      date.innerText = ""

      temp.innerText = ""
      weather_main.innerText = ""

      hightLowWeather.innerText = ""
      presure.innerText = ""

      humidity.innerText = ""
      icon.innerHTML = ""

      document.body.style.background = "linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%),url('asset/2.png') no-repeat  fixed,  center  "
      document.body.style.backgroundSize = "cover"

  }
  function displayResults(weather){
      // const timeZone = weather.sys.sunrise
      //  time__zone.innerHTML = new Date().toDateString(timeZone)
      const times  = `${weather.timezone / 3600}`
      city.innerText = `${weather.name}, ${weather.sys.country}`

      const today = new Date()
      date.innerHTML = buildDate(today) + " , " + "UTC" + " " +  times

      temp.innerText = `${Math.round(weather.main.temp)}°c`
      weather_main.innerHTML = weather.weather[0].main 

      hightLowWeather.innerText = ` ${Math.round(weather.main.temp_min)}°c /  ${Math.round(weather.main.temp_max)}°c`
      presure.innerHTML = `<i class="fas fa-tint"></i> ${Math.round(weather.main.pressure)}`
     
      humidity.innerHTML = `<i class="fas fa-tint-slash"></i> ${Math.round(weather.main.humidity)}%`
      icon.innerHTML = `<img src="http://openweathermap.org/img/w/${weather.weather[0].icon}.png" alt="img"></img>`
     
      changeBackground()

    } 
function changeBackground(){
   
    if ( weather_main.innerText == "Clouds"){
        document.body.style.background = "linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%),url('https://i.pinimg.com/originals/e0/a3/b7/e0a3b7122280d22b83b22155e9436ade.jpg') no-repeat  fixed,  center  "
        document.body.style.backgroundSize = "cover";
     
      }else if (weather_main.innerText == "Clear"){
        document.body.style.background = "linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%),url('https://i.pinimg.com/originals/b3/c9/57/b3c95756dd945730a7c13ee2020d3878.jpg') no-repeat  fixed,  center  "
        document.body.style.backgroundSize = "cover"
     
      }
      else if (weather_main.innerText == "Rain"){
        document.body.style.background = "linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%),url('https://i.pinimg.com/originals/3f/49/74/3f4974bcf8b4b2a71663b825c2aea282.png') no-repeat  fixed,  center  "
        document.body.style.backgroundSize = "cover"
      
      }
      else if (weather_main.innerText == "Snow"){
        document.body.style.background = "linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%),url('https://i.pinimg.com/originals/e3/13/a0/e313a08e5b0455b1d2b5f345b2cdb97f.jpg') no-repeat  fixed,  center  "
        document.body.style.backgroundSize = "cover"
     
      }
      else if (weather_main.innerText == "Thunderstorm"){
        document.body.style.background = "linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%),url('https://c4.wallpaperflare.com/wallpaper/344/980/911/mozilla-illustration-mozilla-firefox-vector-art-wallpaper-preview.jpg') no-repeat  fixed,  center  "
        document.body.style.backgroundSize = "cover"
      
      }
      else if (weather_main.innerText == "Drizzle"){
        document.body.style.background = "linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%),url('https://i.pinimg.com/736x/fa/9b/40/fa9b4044348846f50fa1e10a5d80a8b5--illustration-vector-logo-branding.jpg') no-repeat  fixed,  center  "
        document.body.style.backgroundSize = "cover"
     
      }else {
        document.body.style.background = "linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%),url('https://images.pond5.com/egypt-pyramids-and-nile-river-illustration-149182068_iconl_wide_nowm.jpeg') no-repeat  fixed,  center  "
        document.body.style.backgroundSize = "cover"
      }
}

  function buildDate(d){
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
     
    const day = days[d.getDay()];
    const date = d.getDate();
   
    const month = months[d.getMonth()];
    const year = d.getFullYear()
    
    return `${day} ${date} ${month} ${year}`
}

