import { appState } from "../AppState.js"
import { quotesApi } from "./ApiService.js"

class QuotesService {
  async getQuote() {
    const res = await quotesApi.get()
    console.log(res.data)
    appState.quote = res.data
  }
}

export const quotesService = new QuotesService()