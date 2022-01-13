import { PositionHelper } from "./utils.js";

/**
 * The contoller object.
 */
class Controller extends PositionHelper {
    constructor(id) {
        super(id, false);
    }
}

export { Controller };