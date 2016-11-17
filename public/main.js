const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

const handleButtonClick = (event) => {
  const player = event.target.className
  const computer = getComputerMove()
  $('figure.player img').src = `/images/${player}.svg`
  $('figure.computer img').src = `/images/${computer}.svg`

  console.log('player variable is ', player)
  console.log('computer variable is ', computer)

  if (player === 'rock') {
    if (computer === 'scissors') {
      $('.scores .player').textContent = parseInt($('.scores .player').textContent) + 1
    }
    if (computer === 'paper') {
      $('.scores .computer').textContent = parseInt($('.scores .computer').textContent) + 1
    }
    if (computer === 'rock') {
      // Its a tie, do nothing
    }
  }
  if (player === 'paper') {
    if (computer === 'rock') {
      $('.scores .player').textContent = parseInt($('.scores .player').textContent) + 1
    }
    if (computer === 'scissors') {
      $('.scores .computer').textContent = parseInt($('.scores .computer').textContent) + 1
    }
    if (computer === 'paper') {
      // Its a tie, do nothing
    }
  }
  if (player === 'scissors') {
    if (computer === 'paper') {
      $('.scores .player').textContent = parseInt($('.scores .player').textContent) + 1
    }
    if (computer === 'rock') {
      $('.scores .computer').textContent = parseInt($('.scores .computer').textContent) + 1
    }
    if (computer === 'scissors') {
      // Its a tie, do nothing
    }
  }

  const playerScore = parseInt($('.scores .player').textContent)
  const computerScore = parseInt($('.scores .computer').textContent)

  if (playerScore === 2) {
    matchOver(true)
  }

  if (computerScore === 2) {
    matchOver(false)
  }
  // Check for best two out of three and call gameover if needed

// HINT: Check for win, lose or draw, then call `gameOver()` eventually.
}

const getComputerMove = () => {
  const moves = ['rock', 'paper', 'scissors']
  const playerScore = parseInt($('.scores .player').textContent)
  const computerScore = parseInt($('.scores .computer').textContent)
  const pMatchScore = parseInt($('.matchScores .player').textContent)
  const cMatchrScore = parseInt($('.matchScores .computer').textContent)
  if (playerScore && computerScore && pMatchScore && cMatchrScore === 0) {
    return moves[Math.floor(Math.random() * moves.length)]
  }
}

// HINT: Try calling `gameOver(true)` in the console.
const matchOver = (playerDidWin) => {
  if (playerDidWin) {
    $('.dialog h3').textContent = 'Round goes to human!'
    $('.dialog button').textContent = 'Continue'
    $('.scores .computer').textContent = 0
    $('.scores .player').textContent = 0
    $('.matchScores .player').textContent = parseInt($('.matchScores .player').textContent) + 1
  } else {
    ``
    $('.dialog h3').textContent = 'The Machine is the victor!'
    $('.dialog button').textContent = 'Continue'
    $('.scores .computer').textContent = 0
    $('.scores .player').textContent = 0
    $('.matchScores .computer').textContent = parseInt($('.matchScores .computer').textContent) + 1
  }
  $('body').className = 'modal'

  const playerScore = parseInt($('.matchScores .player').textContent)
  const computerScore = parseInt($('.matchScores .computer').textContent)

  if (playerScore === 2) {
    gameOver(true)
  }

  if (computerScore === 2) {
    gameOver(false)
  }
}
const gameOver = (playerDidWin) => {
  if (playerDidWin) {
    $('.dialog h3').textContent = 'You won!'
    $('.matchScores .computer').textContent = 0
    $('.matchScores .player').textContent = 0
  } else {
    ``
    $('.dialog h3').textContent = 'You lost!'
    $('.matchScores .computer').textContent = 0
    $('.matchScores .player').textContent = 0
  }
  $('body').className = 'modal'
}

const resetGame = () => {
  // TODO: Probably need to do more to reset the game here...
  $('figure.player img').src = '/images/unknown.svg'
  $('figure.computer img').src = '/images/unknown.svg'
  $('body').className = ''
}

const main = () => {
  const buttons = $$('.player-input button')
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', handleButtonClick)
  }
  $('.dialog button').addEventListener('click', resetGame)
}

document.addEventListener('DOMContentLoaded', main)
