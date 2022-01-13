import { Table } from "./table.js";
import { PingPongBall } from "./ping_pong_ball.js";
import { Controller } from "./controller.js";
import { Paddle } from "./paddle.js";

const table = new Table("table");
const pingPongBall = new PingPongBall("ball");
const leftController = new Controller("left-hand");
const rightController = new Controller("right-hand");
const paddle = new Paddle("paddle")

export {
    table,
    pingPongBall,
    leftController,
    rightController,
    paddle,
}