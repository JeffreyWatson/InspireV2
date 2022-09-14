import { appState } from "../AppState.js";
import { weathersService } from "../Services/WeathersService.js";
import { Pop } from "../Utils/Pop.js";

function _drawWeather() {
  let weather = appState.weather
  weather.main.temp = (Math.round(weather.main.temp - 273.15) * 1.8 + 32).toFixed()
  // @ts-ignore
  document.getElementById('weather').innerHTML = `${weather.main.temp + '℉'}`
  // @ts-ignore
  document.getElementById('location').innerHTML = `${weather.name}`
}

function _drawClock() {
  const clock = new Date();
  const display = clock.getHours() + ':' + ('0' + clock.getMinutes()).slice(-2);
  let clockELem = document.getElementById('clock')
  // @ts-ignore
  clockELem.innerHTML = display
}

function _drawDate() {
  let date = new Date()
  date.toLocaleDateString()
  let dateElem = document.getElementById('date')
  // @ts-ignore
  dateElem.innerHTML = date.toLocaleDateString()
}

export class WeathersController {

  constructor() {
    appState.on('weather', _drawWeather);
    setInterval(_drawClock, 1000)
    _drawClock()
    _drawDate()
    this.getWeather()
  }

  async getWeather() {
    try {
      await weathersService.getWeather()
    } catch (error) {
      console.error(error)
      Pop.toast(error.message, 'error')
    }
  }
}