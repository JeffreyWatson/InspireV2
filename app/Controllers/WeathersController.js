import { appState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { weathersService } from "../Services/WeathersService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawWeather() {
  if (!appState.weather) { return }
  // document.getElementById('weather').innerHTML = appState.weather.Template
  setHTML('weather', appState.weather.Template)
}

function _drawClock() {
  const clock = new Date();
  const display = clock.getHours() + ':' + ('0' + clock.getMinutes()).slice(-2);
  setHTML('clock', display)
}

function _drawDate() {
  let date = new Date()
  date.toLocaleDateString()
  setHTML('date', date.toLocaleDateString())
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

  changeTemp() {
    if (appState.currentTemp == 0) {
      setHTML('temperature', `${appState.weather?.getFahrenheit().toFixed(0)}&deg;F`)
      appState.currentTemp = 1
    } else if (appState.currentTemp == 1) {
      setHTML('temperature', `${appState.weather?.getCelsius().toFixed(0)}&deg;C`)
      appState.currentTemp = 0
    }
  }
}