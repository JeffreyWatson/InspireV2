import { appState } from "../AppState.js"
import { imagesApi } from "../Services/ApiService.js"

class ImagesService {


  async getImage() {
    const res = await imagesApi.get()
    console.log(res.data)
    appState.image = res.data
  }
}

export const imagesService = new ImagesService()