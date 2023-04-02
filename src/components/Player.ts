class Player {
    x: number
    y: number
    size: number
    speed: number
    vx: number = 0
    vy: number = 0
    color: string

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
}

export default Player