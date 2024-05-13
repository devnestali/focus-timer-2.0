import state from './state.js'
import * as timer from './timer.js'
import * as elementsTimer from './elements-timer.js'

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running")

  timer.countdown()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove("running")
  timer.updateDisplay()

  return totalTime = 0
}

let totalTime = 0
export function addCounter(addTime) {
  totalTime = totalTime + 5

  addTime = Number(elementsTimer.minutes.value)
  addTime = totalTime

  timer.updateDisplay(addTime)

  return totalTime  
}

export function removeCounter(removeTime) {
  if(totalTime > 0) {
    totalTime = totalTime - 5
  } else {
    totalTime = 0
  }

  removeTime = Number(elementsTimer.minutes.value)
  removeTime = totalTime

  timer.updateDisplay(removeTime)

  return totalTime
}