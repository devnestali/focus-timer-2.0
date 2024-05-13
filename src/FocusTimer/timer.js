import state from './state.js'
import * as elementsTimer from './elements-timer.js'
import { reset } from './actions.js'

export function countdown() {
  clearTimeout(state.countdownId)
  
  if(!state.isRunning){
    return
  }

  let minutes = Number(elementsTimer.minutes.textContent)
  let seconds = Number(elementsTimer.seconds.textContent)

  seconds--

  if(seconds < 0) {
    seconds = 59
    minutes--
  }

  if(minutes < 0){
    reset()
    return
  }

  updateDisplay(minutes, seconds)

  state.countdownId = setTimeout(() => countdown(), 1000)
}


export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds 

  elementsTimer.minutes.textContent = String(minutes).padStart(2, "0")
  elementsTimer.seconds.textContent = String(seconds).padStart(2, "0")
}

