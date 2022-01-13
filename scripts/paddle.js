import * as UTILS from "./utils.js";
import { rightController } from "./index.js";

/**
 * The Paddle object.
 * This is toggled from controller mode, to paddle mode.
 */
class Paddle extends UTILS.PositionHelper {
    constructor(id) {
        super(id, true);
        // TODO check for which controller to use
        this.controller = rightController;

        this.attribute = "dynamic-body";
        this.dynamicString = "shape: square";
    }

    /**
     * Go to Controller Position.
     */
    toController() {
        this.setPosition(this.controller.getPosition());
    }

    /**
     * Toggle the Paddle mode.
     */
    toggle() {
        console.log("Here buddy")
        if (this.isCurrentlyDynamic === true) {
            this.disable();
        } else {
            this.enable();
        }
    }
}

export { Paddle };