class Map {
    width: number
    height: number

    constructor (width: number, height: number) {
        this.width = width
        this.height = height
    }

    Render() {
        console.log('Render map')
    }
}

export default Map