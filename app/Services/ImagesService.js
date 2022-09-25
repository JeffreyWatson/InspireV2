import { appState } from "../AppState.js"
import { imagesApi } from "../Services/ApiService.js"

class ImagesService {


  async getImage() {
    const res = await imagesApi.get()
    appState.image = res.data
  }
}

export const imagesService = new ImagesService()