// Author: Rodrigo Lira, rodrigoronin.com
import Player from '../components/Player'
import Enemy from '../components/Enemy'
import Map from '../maps/Map'

const canvas = document.getElementById('canvas') as HTMLCanvasElement

canvas.width = 1280
canvas.height = 720

const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
const player = new Player(canvas.width / 2, canvas.height / 2, 30, 5, 'green') // Instantiate the player
const enemy = new Enemy(canvas.width / 2.5, canvas.height / 2.5, 30, 5, 'red', player) // Instantiate the Enemy
const map = new Map(canvas.width, canvas.height) // Instantiate the map

enemy.speed = 2 // Change the speed of the enemy

const keysPressed: {[key: string]: boolean} = {}

export const Init = () => {
  document.addEventListener('keydown', (event: KeyboardEvent) => {
    event.preventDefault()

    keysPressed[event.key] = true
  })

  document.addEventListener('keyup', (event: KeyboardEvent) => {
    event.preventDefault()

    keysPressed[event.key] = false
  })

  const GameLoop = () => {
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Update player velocity based on keys pressed
    player.vx = (keysPressed['ArrowRight'] ? 1 : 0) - (keysPressed['ArrowLeft'] ? 1 : 0)
    player.vy = (keysPressed['ArrowDown'] ? 1 : 0) - (keysPressed['ArrowUp'] ? 1 : 0)

    if (keysPressed[' ']) {
      player.BasicAttack()
    }

    // gameMap.draw(); // Need to implement the draw function
    player.Render(ctx)
    player.Update()

    // Instantiate the enemy and update it
    enemy.Render(ctx)
    enemy.Update()

    requestAnimationFrame(GameLoop);
  }

  GameLoop()
}