export class Weather {
  constructor(data) {
    this.temp = data.main.temp
    this.location = data.name
  }

  getFahrenheit() {
    return (this.temp - 273.15) * 1.8 + 32
  }

  getCelsius() {
    return this.temp - 273.15
  }

  get Template() {
    return `
    <div class="d-flex flex-column selectable align-items-center" onclick="app.weathersController.changeTemp()">
        <div id="temperature">
        ${this.getFahrenheit().toFixed(0) + '℉'}
        </div>
        <div>
        ${this.location}
        </div>
      </div>
    `
  }
}