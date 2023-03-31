const canvas = document.getElementById('canvas') as HTMLCanvasElement
canvas.width = 1280
canvas.height = 720

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

const player = new Player (canvas.width / 2, canvas.height / 2, 30, 5, 'red')

const keysPressed: {[key: string]: boolean} = {}

document.addEventListener('keydown', (event: KeyboardEvent) => {
    event.preventDefault()

    keysPressed[event.key] = true
})

document.addEventListener('keyup', (event: KeyboardEvent) => {
    event.preventDefault()

    keysPressed[event.key] = false
})

function GameLoop() {
    const ctx = canvas.getContext('2d')
    if (ctx !== null) {
        ctx.fillStyle = 'black'
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        player.vx = (keysPressed['ArrowRight'] ? 1 : 0) - (keysPressed['ArrowLeft'] ? 1 : 0)
        player.vy = (keysPressed['ArrowDown'] ? 1 : 0) - (keysPressed['ArrowUp'] ? 1 : 0)

        player.Update()
        player.Render(ctx)
        requestAnimationFrame(GameLoop)
    } else {
        return console.log('No context found')
    }
}

GameLoop()

// Bypass the module 'main.ts' compile error message
export {}