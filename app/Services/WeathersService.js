import { appState } from "../AppState.js"
import { weatherApi } from "./ApiService.js"

class WeathersService {
  async getWeather() {
    const res = await weatherApi.get()
    console.log(res.data)
    appState.weather = res.data
  }


}

export const weathersService = new WeathersService()