import { appState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";
import { Pop } from "../Utils/Pop.js";

function _drawQuote() {
  let quote = appState.quote
  // @ts-ignore
  document.getElementById('quote').innerHTML = `"${quote.content}"`
  // @ts-ignore
  document.getElementById('author').innerHTML = `-${quote.author}`

}

export class QuotesController {
  constructor() {
    appState.on('quote', _drawQuote)
    this.getQuote()
  }

  async getQuote() {
    try {
      await quotesService.getQuote()
    } catch (error) {
      console.log(error)
      Pop.toast(error.message, 'error')
    }
  }
}