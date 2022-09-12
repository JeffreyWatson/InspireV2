import { appState } from "../AppState"
import { imagesApi } from "../Services/ApiService.js"

class ImagesService {


  async getImage() {
    const res = await imagesApi.get()
    appState.image = res.data
    console.log(res.data)
  }
}

export const imagesService = new ImagesService()