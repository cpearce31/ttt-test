'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
$(() => {
  authEvents.addHandlers()

  $('.box').click(gameEvents.onClickGameBoard)
  // $('#total-games').append(gameEvents.totalGames)
  // $('#draws').append(gameEvents.numberOfDraws)
})
// id^='index'
