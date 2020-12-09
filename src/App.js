import Rectangle from "./components/basic/Rectangle.js";

export default class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");

    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    this.draw.bind(this);
    this.draw();
  }

  draw() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;
    this.ctx.scale(this.pixelRatio, this.pixelRatio);

    this.x = this.stageWidth / 2;
    this.y = this.stageHeight / 2;

    this.width = this.stageWidth / 5;
    this.height = this.stageHeight / 5;

    console.log(this.x, this.y, this.width, this.height);

    this.rectangle = new Rectangle(this.x, this.y, this.width, this.height);
    this.rectangle.draw(this.ctx);
  }
}
