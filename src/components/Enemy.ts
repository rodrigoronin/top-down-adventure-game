import Player from './Player'

class Enemy {
  x: number
  y: number
  size: number
  speed: number
  vx: number = 0
  vy: number = 0
  color: string
  playerRef: Player

  constructor (x: number, y: number, size: number, speed: number, color: string, player: Player) {
      this.x = x
      this.y = y
      this.size = size
      this.speed = speed
      this.color = color
      this.playerRef = player
  }

  Render(ctx: CanvasRenderingContext2D) {
      ctx.fillStyle = this.color
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fill()
  }

  Update() {
    // Calculate velocity vector towards player
    const dx = this.playerRef.x - this.x
    const dy = this.playerRef.y - this.y
    const distance = Math.sqrt(dx * dx + dy * dy)

    // Stop moving when distance is within 16 pixels of player
    if (distance <= this.size * 2.5) {
      // Reset velocity when too far from the player
      this.vx = 0
      this.vy = 0
    }
    else if (distance <= this.size * 10) {
      this.vx = (dx / distance) || 0 // Avoid division by zero
      this.vy = (dy / distance) || 0 // Avoid division by zero

      // Update position based on velocity and speed
      this.x += this.vx * this.speed
      this.y += this.vy * this.speed
    }
  }
}

export default Enemy