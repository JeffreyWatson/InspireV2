

function _drawClock() {
  // const now = new Date();
  // const current = now.getHours() + ':' + now.getMinutes();

  const clock = new Date();
  const display = clock.getHours() + ':' + clock.getMinutes();
  let clockELem = document.getElementById('clock')
  // @ts-ignore
  clockELem.innerHTML = display
}

function _drawDate() {
  let date = new Date()
  date.toLocaleDateString()
  let dateElem = document.getElementById('date')
  // @ts-ignore
  dateElem.innerHTML = date.toLocaleDateString()
}

export class ClocksController {
  constructor() {
    setInterval(_drawClock, 1000)
    _drawClock()
    _drawDate()
  }
}