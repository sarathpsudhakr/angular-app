export class Point { //Made it by using export
    constructor(private x?: number, private y?:number) {

    }

    draw() {
        console.log("X:"+this.x+"Y:"+this.y)
    }
}