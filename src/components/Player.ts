class Player {
    x: number
    y: number
    size: number
    speed: number
    vx: number = 0
    vy: number = 0
    color: string
    lastAttackTime: number = 0 // Keep track of the timestamp of the last attack
    attackCooldown: number = 1000 // Cooldown time in milliseconds (1 second)

    constructor (x: number, y: number, size: number, speed: number, color: string) {
        this.x = x
        this.y = y
        this.size = size
        this.speed = speed
        this.color = color
    }

    Render(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
    }

    Update() {
      this.x += this.vx * this.speed
      this.y += this.vy * this.speed
    }

    BasicAttack() {
      const currentTime = Date.now(); // Get the current timestamp
        if (currentTime - this.lastAttackTime >= this.attackCooldown) {
            console.log('Basic Attack!');
            this.lastAttackTime = currentTime; // Update the last attack time to current time
        } else {
            console.log('Attack on cooldown!');
        }
    }
}

export default Player