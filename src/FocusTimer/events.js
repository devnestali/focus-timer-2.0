import * as elementsTimer from './elements-timer.js'
import * as actions from './actions.js'

export function registerControls () {
  elementsTimer.controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action

    if(typeof actions[action] != "function") {
      return
    }

    actions[action]()
  })
}

export function setMinutes () {
  elementsTimer.minutes.addEventListener('focus', () => {
    elementsTimer.minutes.textContent = ""
  })
}