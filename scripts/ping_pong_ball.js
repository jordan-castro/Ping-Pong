import { table } from "./index.js";
import * as UTILS from "./utils.js"

/**
 * The PingPongBall object.
 */
class PingPongBall extends UTILS.PositionHelper {
    constructor(id) {
        super(id, true);

        this.dynamicString = "shape: sphere; mass: 0.0005"
    }

    /**
     * Teleport to starting position.
     */
    toStart() {
        // Get the table position
        const tablePosition = table.getPosition();
        // The ball should go to the end of the table.
        // TODO Add a check to see which Player is calling this function.
        // TODO When checking, if Player 1 then z + 0.8 othewise it should be -0.8
        this.setPosition(`${tablePosition.x} ${tablePosition.y + 1} ${tablePosition.z + 0.8}`);
    }
}

export { PingPongBall };