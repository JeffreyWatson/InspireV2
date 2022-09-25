import { appState } from "../AppState.js"
import { Weather } from "../Models/Weather.js";
import { weatherApi } from "./ApiService.js"

class WeathersService {

  async getWeather() {
    const res = await weatherApi.get()
    appState.weather = new Weather(res.data)
    console.log(res.data);
  }

}

export const weathersService = new WeathersService()