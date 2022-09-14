import { appState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";
import { Pop } from "../Utils/Pop.js";

function _drawImage() {
  let image = appState.image
  document.body.style.backgroundImage = `url(${image.largeImgUrl})`
}

export class ImagesController {
  constructor() {
    appState.on('image', _drawImage)
    this.getImage()
  }

  async getImage() {
    try {
      await imagesService.getImage()
    } catch (error) {
      console.error(error);
      Pop.toast(error.message, 'error')
    }
  }
}