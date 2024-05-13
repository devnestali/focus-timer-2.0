import * as themes from './elements-tm.js'
import * as sounds from './sounds-tm.js'
import state from '../src/FocusTimer/state.js'

function handleForest() {
  state.isPlaying = !state.isPlaying
  
  themes.body.classList.toggle('forest')
  themes.forest.classList.toggle('forest')

  state.isPlaying ? sounds.forestAudio.play() : sounds.forestAudio.pause()
}

function handleRain() {
  state.isPlaying = !state.isPlaying
  
  themes.body.classList.toggle('rain')
  themes.rain.classList.toggle('rain')

  
  state.isPlaying ? sounds.rainAudio.play() : sounds.rainAudio.pause()
}

function handleCoffeeShop() {
  state.isPlaying = !state.isPlaying
  
  themes.body.classList.toggle('coffeeshop')
  themes.coffeeShop.classList.toggle('coffeeshop')

  
  state.isPlaying ? sounds.coffeeShopAudio.play() : sounds.coffeeShopAudio.pause()
}

function handleFireplace() {
  state.isPlaying = !state.isPlaying
  
  themes.body.classList.toggle('fireplace')
  themes.fireplace.classList.toggle('fireplace')

  
  state.isPlaying ? sounds.fireplaceAudio.play() : sounds.fireplaceAudio.pause()
}


themes.forest.addEventListener('click', handleForest)
themes.rain.addEventListener('click', handleRain)
themes.coffeeShop.addEventListener('click', handleCoffeeShop)
themes.fireplace.addEventListener('click', handleFireplace)









































